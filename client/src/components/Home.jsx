import "../App.css";
import { useNavigate } from "react-router-dom";
import cwallet from "../logo_2.svg";

import { Button } from "antd";

const Home = () => {
  const navigate = useNavigate();
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
      </div>
    </>
  );
};

export default Home;
