const NftRepository = require('./nft.repository');
const nftRepository = new NftRepository();


 
class NftService {

    async createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId) {

        nftRepository.createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId);

        return {
            statusCode: 201,
            responseBody: {
                message: "success"
            }
        };
    }

    async sellNFT(assetId,price) {

        nftRepository.sellNFT(assetId,price);

        return {
            statusCode: 200,
            responseBody: {
                message: "success"
            }
        };
    }

    async sellList(){
        var sellList = await nftRepository.sellList();

        return {
            statusCode: 200,
            responseBody: {
                sellList
            }
        };
    }

    async saveTradeHistory(assetId, price, sellerId, buyerId){
        nftRepository.saveTradeHistory(assetId, price, sellerId, buyerId);

        return {
            statusCode: 200,
            responseBody: {
                message: "success"
            }
        };
    }



    async getTradeHistory(){
        var List = await nftRepository.getTradeHistory();

        return {
            statusCode: 200,
            responseBody: {
                history: List
            }
        };
    }

    async getAssetDetails(assetId){
        var d = await nftRepository.getAssetDetails(assetId);

        return {
            statusCode: 200,
            responseBody: {
                details : d[0]
            }
        };
    }

}

 
module.exports = NftService;