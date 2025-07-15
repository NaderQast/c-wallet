import "../App.css";
import { useNavigate } from "react-router-dom";
import cwallet from "../logo_2.svg";

import { Button, Modal } from "antd";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="content">
        <img src={cwallet} alt="logo" className="frontPageLogo" />
        <h2> Hey There 👋 </h2>
        <h4 className="h4"> Welcome to your Web3 Wallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        {/* <Button
          onClick={() => setIsModalOpen(true)}
          className="frontPageButton"
          type="primary"
        >
          Connect Wallet
        </Button> */}
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Find Alt Coin Gems:{" "}
          <a href="https://moralismoney.com/" target="_blank" rel="noreferrer">
            money.moralis.io
          </a>
        </p>
        <Modal
          title="Connect Wallet"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Button
            type="primary"
            onClick={() => {
              setIsModalOpen(false);
              navigate("/yourwallet");
            }}
          >
            Create New Wallet
          </Button>
          <Button
            style={{ marginTop: 10 }}
            onClick={() => {
              setIsModalOpen(false);
              navigate("/recover");
            }}
          >
            Sign In With Seed Phrase
          </Button>
        </Modal>
      </div>
    </>
  );
};

export default Home;
