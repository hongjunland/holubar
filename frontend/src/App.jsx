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
  cancelSale,
} from "./web3/Web3Client";
import { useWeb3React } from "@web3-react/core";
import { injected } from "web3/connectors";
import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";

function App() {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const [minted, setMinted] = useState(false);
  let tokenId;

  useEffect(() => {
    if (active) {
      init(account);
    }
  }, []);

  const connectMetamask = async () => {
    await activate(injected, (error) => {
      if ("/No Ethereum provider was found on window.ethereum/".test(error)) {
        window.open("https://metamask.io/download.html");
      }
    });

    init(account);
  };

  const login = (address) => {
    if (localStorage.getItem("accessToken")) {
      return;
    }
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
    localStorage.removeItem("accessToken");
  };

  const mint = async (name, desc, url, price) => {
    await tokenMint(name, desc, url, price)
      .then((tx) => {
        console.log(tx);
        tokenId = tx;
        setMinted(true);
      })
      .then(() => {
        console.log(tokenId);
        axios({
          url: "http://3.35.173.223:5050/nft/create",
          method: "post",
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
          data: {
            assetName: name,
            assetDesc: desc,
            assetImageUrl: url,
            tokenId: tokenId,
            price: price,
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _newSale = async (tokenId) => {
    console.log(await newSale(tokenId));
  };

  const _cancelSale = async (tokenId) => {
    console.log(await cancelSale(tokenId));
  };

  const buying = async (tokenId, price) => {
    console.log(await trading(tokenId, price));
  };

  const getToken = async (tokenId) => {
    const nowToken = await getTokenById(tokenId);
    console.log(nowToken);

    return nowToken;
  };

  const getTokenList = async (account) => {
    const myTokenList = await getTokensByWallet(account);
    console.log(myTokenList);

    return myTokenList;
  };

  let accountButton;
  if (active) {
    accountButton = (
      <div>
        <button onClick={disconnectMetamask}>Logout</button>;
        <div>{login(account)}</div>
      </div>
    );
  } else
    accountButton = <button onClick={connectMetamask}>MetaMask Login</button>;

  return (
    <div className="app">
      <Router>
        <Header>
          <Nav />
        </Header>
        <Main>
          <Routes
            chainId={chainId}
            account={account}
            active={active}
            activate={activate}
            deactivate={deactivate}
            minted={minted}
            tokenId={tokenId}
            connectMetamask={connectMetamask}
            disconnectMetamask={disconnectMetamask}
            mint={mint}
            _newSale={_newSale}
            _cancelSale={_cancelSale}
            buying={buying}
            getToken={getToken}
            accountButton={accountButton}
          />
        </Main>
        {/* <Footer /> */}
      </Router>
      {/* 
      <div>
        <div>
          <p>Account: {account}</p>
          <p>ChainId: {chainId}</p>
        </div>
        <div>
          {accountButton}
          */}
      {/* <button type="button" onClick={handleConnect}>{active?'Logout':'MetaMask Login'}</button> */}

      {/* 
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
      <br />
      <button onClick={() => _cancelSale(tokenId)}>Cancel sale</button>
      <br />
      <button onClick={() => getToken(tokenId)}>Get Token</button>
      <br />
      <button onClick={() => getTokenList(account)}>Get my Tokens</button>
      */}
    </div>
  );
}

export default App;
