import React, { useEffect, useState } from 'react';
import Nav from 'components/common/Nav';
import Footer from 'components/common/Footer';
import Main from 'components/common/Main';
import Routes from 'routes';
import {BrowserRouter as Router} from "react-router-dom";
import Header from 'components/common/Header';
import { init, tokenMint, newSale, trading } from './web3/Web3Client';
import { useWeb3React } from "@web3-react/core";
import { injected } from 'web3/connectors';

function App() {
  const {
    chainId,
    account,
    active,
    activate,
    deactivate
  } = useWeb3React();

  const [minted, setMinted] = useState(false);
  const [tokenId, setTokenId] = useState();

  useEffect(() => {
    if (active) {
      init(
        "0x3C8927a822eF9eB871Fb1687787c673D31a39820", // NFT Address
        "0x209C47817fb0872F2Eac6637d54122dA89011077", // Market Address
        "0x3058a818B78f5287114024C50DFdd674cb74a2af", // Donate getter Wallet Address
        account
      );
    }
  }, []);

  const connectMetamask = async () => {
    await activate(injected,(error)=>{
      if('/No Ethereum provider was found on window.ethereum/'.test(error)){
        window.open('https://metamask.io/download.html');
      }
    });

    init(
      "0x3C8927a822eF9eB871Fb1687787c673D31a39820", // NFT Address
      "0x209C47817fb0872F2Eac6637d54122dA89011077", // Market Address
      "0x3058a818B78f5287114024C50DFdd674cb74a2af", // Donate getter Wallet Address
      account
    );
  }

  const disconnectMetamask = async () => {
    await deactivate();
  }

  const mint = async (name, desc, url, price) => {
    await tokenMint(name, desc, url, price)
      .then((tx) => {
        setTokenId(tx);
        setMinted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const _newSale = (tokenId, price) => {
    newSale(tokenId, price);
  }

  const buying = (tokenId, price) => {
    trading(tokenId, price);
  }

  let accountButton;
  if (active)
    accountButton = <button onClick={disconnectMetamask}>Logout</button>
  else
    accountButton = <button onClick={connectMetamask}>MetaMask Login</button>
  
  return (
    <div className='app'>
      <Router>
          <Header>
            <Nav/>
          </Header>
        <Main>
          <Routes/>
        </Main>
        <Footer/>
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
        <button onClick={() => mint("name", "desc", "temp", "0.05")}>Mint!</button>
      ) : (
        <button onClick={() => _newSale(tokenId, 0.05)}>Now Sale!</button>
      )}
      <br/>
      <button onClick={() => buying(tokenId, 0.05)}>Buy!</button>
    </div>
  );
}

export default App;