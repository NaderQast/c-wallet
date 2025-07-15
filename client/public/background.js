// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openPopup") {
    // Optional: Trigger a tab or open the popup
    chrome.action.openPopup().catch((err) => {
      console.error("Failed to open popup:", err);
    });
  }

  if (message.action === "connect") {
    // ⚠️ Replace this with your real wallet address from storage/session later
    const dummyAddress = chrome.storage.local;

    // Respond back to content script, which will send it to the page
    sendResponse({ address: dummyAddress });
  }

  // Must return true if using sendResponse asynchronously
  return true;
});
