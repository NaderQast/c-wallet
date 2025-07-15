// public/injected.js
(function () {
  // Avoid double-injection
  if (window.alnWallet) return;

  window.alnWallet = {
    isConnected: async () => false,
    selectedAddress: null,
    request: async ({ method }) => {
      if (method === "eth_requestAccounts") {
        // Send a message to the extension background script
        window.postMessage({ type: "ALN_CONNECT_REQUEST" }, "*");
        return new Promise((resolve, reject) => {
          window.addEventListener("message", function listener(event) {
            if (event.data.type === "ALN_CONNECTED_ADDRESS") {
              window.removeEventListener("message", listener);
              resolve([event.data.address]);
            }
          });
        });
      }
    },
    on: (event, handler) => {
      console.log("Subscribed to:", event);
    },
  };
})();
