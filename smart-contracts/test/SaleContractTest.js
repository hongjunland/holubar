/**
 *  PJT Ⅲ - Req.1-SC3) 시나리오 테스트
 */
const DonateNFT = artifacts.require("DonateNFT");
const Market = artifacts.require("Market");

contract("Sale Contract Testing", (accounts) => {
    let token;
    let market;

    beforeEach(async function () {
        token = await DonateNFT.new();
        market = await Market.new(token.address);
    })
    
    describe("포지티브 케이스 1: 마켓 동작 점검", () => {
        it("Market trading", async () => {
            const address1 = accounts[0];
            const address2 = accounts[1];
            const tokenURI = "tempURI";
            
            let tokenId = (await token.create(address1, tokenURI, 5)).logs[0].args["tokenId"];
            let owner = (await token.ownerOf(tokenId));
            
            assert.equal(address1, owner, "NFT Mint Failed");
            
            await token.approve(market.address, tokenId);
            await market.newSale(address1, tokenId, 50);

            await market.trading(tokenId, {
                from: address2,
                value: 50
            });
            
            owner = (await token.ownerOf(tokenId));
            assert.equal(address2, owner, "NFT Transfer Failed.");

            assert.equal(tokenURI, await token.tokenURI(tokenId), "Wrong Token Id or URI.")
        })
    });
});
