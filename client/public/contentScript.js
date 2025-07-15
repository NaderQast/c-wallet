// contentScript.js

// ✅ Step 1: Inject wallet provider into the webpage
function injectScript(file) {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL(file);
  script.type = "text/javascript";
  script.async = false;
  script.onload = function () {
    this.remove(); // Clean up after injecting
  };
  (document.head || document.documentElement).appendChild(script);
}

// Inject wallet logic into the webpage
injectScript("injected.js");

console.log("✅ Injected script attempted");

// ✅ Step 2: Listen for page <-> extension communication
window.addEventListener("message", (event) => {
  if (event.source !== window || !event.data.type) return;

  if (event.data.type === "ALN_CONNECT_REQUEST") {
    chrome.runtime.sendMessage({ action: "connect" }, (response) => {
      if (response?.address) {
        window.postMessage(
          { type: "ALN_CONNECTED_ADDRESS", address: response.address },
          "*"
        );
      }
    });
  }
});

// ✅ Step 3: Scan page for Connect Wallet buttons and trigger popup/tab
function isConnectButton(el) {
  const text = el.innerText?.toLowerCase() || "";
  return (
    text.includes("connect") &&
    text.includes("wallet") &&
    (el.tagName === "BUTTON" || el.getAttribute("role") === "button")
  );
}

function addConnectButtonListeners() {
  const buttons = Array.from(
    document.querySelectorAll("button, [role='button']")
  );
  for (const btn of buttons) {
    if (isConnectButton(btn) && !btn._walletListenerAttached) {
      btn.addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "openPopup" });
      });
      btn._walletListenerAttached = true; // Prevent duplicate listeners
    }
  }
}

// Add listeners on initial load
window.addEventListener("load", addConnectButtonListeners);

// Also add listeners when DOM changes (for dynamic apps)
const observer = new MutationObserver(addConnectButtonListeners);
observer.observe(document.body, { childList: true, subtree: true });
