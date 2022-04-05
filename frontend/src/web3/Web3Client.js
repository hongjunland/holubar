import DonateNFTBuild from 'contracts/DonateNFT.json';
import MarketBuild from 'contracts/Market.json';
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers';

let donateContract;
let marketContract;
let donateGetterAddress;
let account;
const ether = 1000000000000000000;

export const init = async (donateNFTAddress, marketAddress, _donateGetter, _account) => {
    const library = new Web3Provider(window.ethereum);
    account = _account;
    
    donateGetterAddress = _donateGetter.toLowerCase();

    const signer = library.getSigner(account).connectUnchecked();
    
    donateContract = new Contract(donateNFTAddress, DonateNFTBuild.abi, signer);
    marketContract = new Contract(marketAddress, MarketBuild.abi, signer);
    
    if (donateNFTAddress !== await marketContract.getNFTAddress()) {
        await marketContract.setNFTAddress(donateNFTAddress, { from: account });
    }

    if (marketAddress !== await donateContract.getMarketAddress()) {
        await donateContract.setMarketAddress(marketAddress, { from: account });
    }
}

export const tokenMint = async (name, desc, tokenURI, price) => {
    await marketContract
        .donating(donateGetterAddress, name, desc, tokenURI, {
            from: account,
            value: (price * ether).toString()
        })
        .then((result) => console.log(result))
    
    const nowId = await donateContract.current({ from: account });
    
    return nowId-1;
}

export const newSale = async (tokenId, price) => {
    await donateContract
        .newSale(tokenId, (price * ether).toString(), { from: account })
        .then((result) => console.log(result))
}

export const trading = async (tokenId, price) => {
    await marketContract.trading(tokenId, {
        from: account,
        value: (price * ether).toString()
    }).then((result) => console.log(result))
}