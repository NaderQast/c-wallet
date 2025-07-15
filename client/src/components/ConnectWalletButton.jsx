import React from "react";

const ConnectWalletButton = () => {
  const handleConnect = () => {
    if (
      window.chrome &&
      window.chrome.runtime &&
      window.chrome.runtime.sendMessage
    ) {
      window.chrome.runtime.sendMessage({ action: "openPopup" });
    } else {
      alert("This button only works in the Chrome extension context.");
    }
  };

  return (
    <button
      onClick={handleConnect}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "6px",
        background: "#1677ff",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
