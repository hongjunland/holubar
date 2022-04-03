import Web3 from 'web3';
import DonateNFTBuild from 'contracts/DonateNFT.json';
import MarketBuild from 'contracts/Market.json';

let selectedAccount;
let donateContract;
let marketContract;
// let adminAddress;
let donateGetterAddress;
let web3

let isInit = false;

export const init = async (donateNFTAddress, marketAddress, _adminAddress, _donateGetter) => {
    let provider = window.ethereum;
    
    if (typeof provider !== 'undefined') {
        provider.request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                selectedAccount = accounts[0];
                console.log(`Selected account is ${selectedAccount}`);
            })
        .catch((err) => {
            console.log(err);
            return;
        });

        window.ethereum.on('accountsChanged', function (accounts) {
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
        })

    }
    
    web3 = new Web3(provider);
    
    // adminAddress = _adminAddress.toLowerCase();
    donateGetterAddress = _donateGetter.toLowerCase();
    
    donateContract = new web3.eth.Contract(DonateNFTBuild.abi, donateNFTAddress);
    marketContract = new web3.eth.Contract(MarketBuild.abi, marketAddress);
    
    if (donateNFTAddress !== await marketContract.methods.getNFTAddress().call()) {
        await marketContract.methods.setNFTAddress(donateNFTAddress).send({ from: selectedAccount });
    }

    isInit = true;
}

export const tokenMint = async (tokenURI, price) => {
    if (!isInit) {
        await init();
    }

    await marketContract.methods
        .donating(donateGetterAddress, tokenURI)
        .send({
            from: selectedAccount,
            value: web3.utils.toWei(price, 'gwei')
        })
        .then((result) => console.log(result))
}

export const newSale = async (tokenId, price) => {
    await donateContract.methods
        .approve(marketContract.options.address, tokenId)
        .send({ from: selectedAccount })
        .then(async (result) => {
            console.log(result);
        
            await marketContract.methods
                .newSale(selectedAccount, tokenId, price)
                .send({
                    from: selectedAccount
                })
                .then((result) => console.log(result))
    })
}

export const trading = async (tokenId, price) => {
    await marketContract.methods
        .trading(tokenId)
        .send({
            from: selectedAccount,
            value: web3.utils.toWei(price, 'gwei')
        })
        .then((result) => console.log(result))
}