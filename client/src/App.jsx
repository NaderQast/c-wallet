import "./App.css";
import { useState } from "react";
import logo from "./logo_1.svg";
import { Select } from "antd";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import WalletView from "./components/WalletView";
import RecoverAccount from "./components/RecoverAccount";
function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (
    <>
      <Router>
        <div className="App">
          <header>
            <img src={logo} className="headerLogo" alt="logo" />
            <Select
              onChange={(val) => setSelectedChain(val)}
              value={selectedChain}
              options={[
                {
                  label: "Ethereum",
                  value: "0x1",
                },
                {
                  label: "Sepolia",
                  value: "0xaa36a7",
                },
                {
                  label: "Polygon Amoy",
                  value: "0x13882",
                },
                {
                  label: "Polygon",
                  value: "0x89",
                },
              ]}
              className="dropdown"
            ></Select>
          </header>
          {wallet && seedPhrase ? (
            <Routes>
              <Route
                path="/yourwallet"
                element={
                  <WalletView
                    wallet={wallet}
                    setWallet={setWallet}
                    seedPhrase={seedPhrase}
                    setSeedPhrase={setSeedPhrase}
                    selectedChain={selectedChain}
                  />
                }
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/recover"
                element={
                  <RecoverAccount
                    setSeedPhrase={setSeedPhrase}
                    setWallet={setWallet}
                  />
                }
              />
              <Route
                path="/yourwallet"
                element={
                  <CreateAccount
                    setSeedPhrase={setSeedPhrase}
                    setWallet={setWallet}
                  />
                }
              />
              <Route
                path="/recover"
                element={
                  <RecoverAccount
                    setSeedPhrase={setSeedPhrase}
                    setWallet={setWallet}
                  />
                }
              />
            </Routes>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
