import React from "react";
import "../App.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ethers } from "ethers";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateAccount = ({ setWallet, setSeedPhrase }) => {
  const [newSeedPhrase, setNewSeedPhrase] = useState(null);
  const navigate = useNavigate();

  function generateWallet() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    console.log(mnemonic);
    setNewSeedPhrase(mnemonic);
  }
  function setWalletAndMnemonic() {
    setSeedPhrase(newSeedPhrase);
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address);
    localStorage.setItem(
      "wallet",
      ethers.Wallet.fromPhrase(newSeedPhrase).address
    );
    localStorage.setItem("seedPhrase", newSeedPhrase);
  }

  return (
    <>
      <div className="content">
        <div className="mnemonic">
          <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
          <div>
            Once you generate the seed phrase, save it securely in order to
            recover your wallet in the future.
          </div>
        </div>
        <Button
          className="frontPageButton"
          type="primary"
          onClick={() => generateWallet()}
        >
          Generate Seed Phrase
        </Button>
        <Card className="seedPhraseContainer">
          {newSeedPhrase && (
            <pre style={{ whiteSpace: "pre-wrap" }}>{newSeedPhrase}</pre>
          )}
        </Card>
        <Button
          className="frontPageButton"
          type="default"
          onClick={() => setWalletAndMnemonic()}
        >
          Open Your New Wallet
        </Button>
        <p className="frontPageBottom" onClick={() => navigate("/")}>
          Back Home
        </p>
      </div>
    </>
  );
};

export default CreateAccount;
