import DonateNFTBuild from 'contracts/DonateNFT.json';
import MarketBuild from 'contracts/Market.json';
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers';
import axios from 'axios'

let donateContract;
let marketContract;
let donateGetterAddress;
let account;
let library;
const ether = 1000000000000000000;
const NFTName = "DonateNFT";
const MarketName = "Market";
const DonateGetterId = 1;

export const init = async (donateNFTAddress, marketAddress, _donateGetter, _account) => {
    library = new Web3Provider(window.ethereum);
    account = _account;
    
    const signer = library.getSigner(account).connectUnchecked();

    await axios.get(`http://3.35.173.223:5050/address/contract/${NFTName}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }).then((res) => {
        donateContract = new Contract(res.data.contractAddress, DonateNFTBuild.abi, signer);
    });

    await axios.get(`http://3.35.173.223:5050/address/contract/${MarketName}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }).then((res) => {
        marketContract = new Contract(res.data.contractAddress, MarketBuild.abi, signer);
    });

    // await axios.get("http://3.35.173.223:5050/donatetarget/", {
    //     params: {
    //         donateTargetId: DonateGetterId
    //     }
    // })

    await axios.get(`http://3.35.173.223:5050/address/donatetarget/${DonateGetterId}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }).then((res) => {
        donateGetterAddress = res.data.donateAddress.toLowerCase();
    });

    if (donateNFTAddress !== await marketContract.getNFTAddress()) {
        await marketContract.setNFTAddress(donateNFTAddress, { from: account });
    }

    if (marketAddress !== await donateContract.getMarketAddress()) {
        await donateContract.setMarketAddress(marketAddress, { from: account });
    }
}

export const tokenMint = async (name, desc, tokenURI, price) => {
    const tx = await marketContract
        .donating(donateGetterAddress, name, desc, tokenURI, {
            from: account,
            value: (price * ether).toString()
        })
    
    let nowId;

    await tx.wait()
        .then(async (receipt) => {
            if (receipt.status === 1) {
                nowId = await donateContract.current({ from: account });
            }
        })
    
    return nowId-1;
}

export const getTokenById = async (tokenId) => {
    return await donateContract.getTokenById(tokenId);
}

export const getTokensByWallet = async (account) => {
    return await donateContract.getTokensByWallet(account);
}

export const newSale = async (tokenId) => {
    const tx = await donateContract
        .newSale(tokenId, { from: account });
    
    const receipt = await tx.wait();

    if (receipt.status === 1)
        return true;
    else
        return false;
}

export const cancelSale = async (tokenId) => {
    const tx = await marketContract
        .deleteSale(tokenId, true, { from: account });
    
    const receipt = await tx.wait();

    if (receipt.status === 1)
        return true;
    else
        return false;
}

export const trading = async (tokenId, price) => {
    const tx = await marketContract.trading(tokenId, {
        from: account,
        value: (price * ether).toString()
    });

    const receipt = await tx.wait();

    if (receipt.status === 1)
        return true;
    else
        return false;
}