import { useEffect, useState } from 'react';
import { init, tokenMint, newSale, trading } from './Web3Client';

function App() {
  const [minted, setMinted] = useState(false);

  useEffect(() => {
    init(
      "0x5e0E0E85220c8421b133846BFe3b664Fb4bDB456", // NFT Address
      "0x6e6432BfE37b60Cb32701dfb1c4D9b38F8b2E952", // Market Address
      "0xCe2aE7253A711164C157f068874D86D6a6c56994", // Admin Wallet Address
      "0x3058a818B78f5287114024C50DFdd674cb74a2af" // Donate getter Wallet Address
    );
  }, []);

  const mint = (url, price) => {
    tokenMint(url, price)
      .then((tx) => {
        // console.log(tx);
        setMinted(true);
      })
      .catch((err) => {
        console.log(err);
    })
  }

  const _newSale = (tokenId, price) => {
    newSale(tokenId, price);
  }

  const buying = (tokenId, price) => {
    trading(tokenId, price);
  }
  
  return (
    <div className="App">
      {!minted ? (
        <button onClick={() => mint("temp", "500000")}>Mint!</button>
      ) : (
        <button onClick={() => _newSale("16", "500000")}>Now Sale!</button>
      )}
      <br/>
      <button onClick={() => buying("16", "500000")}>Buy!</button>
    </div>
  );
}

export default App;
