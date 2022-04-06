import React, { useEffect, useState } from "react";
import Nav from "components/common/Nav";
import Footer from "components/common/Footer";
import Main from "components/common/Main";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/common/Header";
import {
  init,
  tokenMint,
  newSale,
  trading,
  getTokenById,
  getTokensByWallet,
} from "./web3/Web3Client";
import { useWeb3React } from "@web3-react/core";
import { injected } from "web3/connectors";
import { ConstructionOutlined } from "@mui/icons-material";

import axios from "axios";

function App() {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const [minted, setMinted] = useState(false);
  const [tokenId, setTokenId] = useState();

  useEffect(() => {
    if (active) {
      init(
        "0xD6D694F4a2048755Fc6004638b52A420CE54A49a", // NFT Address
        "0x37Bb8a406244dA78Db4B2028CdE8ee9319Bc2E00", // Market Address
        "0x3058a818B78f5287114024C50DFdd674cb74a2af", // Donate getter Wallet Address
        account
      );
    }
  }, []);

  const connectMetamask = async () => {
    await activate(injected, (error) => {
      if ("/No Ethereum provider was found on window.ethereum/".test(error)) {
        window.open("https://metamask.io/download.html");
      }
    });

    init(
      "0xD6D694F4a2048755Fc6004638b52A420CE54A49a", // NFT Address
      "0x37Bb8a406244dA78Db4B2028CdE8ee9319Bc2E00", // Market Address
      "0x3058a818B78f5287114024C50DFdd674cb74a2af", // Donate getter Wallet Address
      account
    );
    login(account);
  };

  const login = (address) => {
    axios({
      url: "http://3.35.173.223:5050/user/login",
      method: "post",
      data: {
        walletAddress: address,
      },
    }).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      console.log("get Token success");
    });
  };

  const disconnectMetamask = async () => {
    await deactivate();
  };

  const mint = async (name, desc, url, price) => {
    await tokenMint(name, desc, url, price)
      .then((tx) => {
        setTokenId(tx);
        setMinted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _newSale = async (tokenId) => {
    await newSale(tokenId);
  };

  const buying = async (tokenId, price) => {
    await trading(tokenId, price);
  };

  let accountButton;
  if (active)
    accountButton = <button onClick={disconnectMetamask}>Logout</button>;
  else
    accountButton = <button onClick={connectMetamask}>MetaMask Login</button>;

  return (
    <div className="app">
      <Router>
        <Header>
          <Nav />
        </Header>
        <Main>
          <Routes />
        </Main>
        <Footer />
      </Router>
      <div>
        <div>
          <p>Account: {account}</p>
          <p>ChainId: {chainId}</p>
        </div>
        <div>
          {accountButton}
          {/* <button type="button" onClick={handleConnect}>{active?'Logout':'MetaMask Login'}</button> */}
        </div>
      </div>
      {!minted ? (
        <button onClick={() => mint("name", "desc", "temp", "0.05")}>
          Mint!
        </button>
      ) : (
        <button onClick={() => _newSale(tokenId)}>Now Sale!</button>
      )}
      <br />
      <button onClick={() => buying(tokenId, 0.05)}>Buy!</button>
    </div>
  );
}

export default App;
