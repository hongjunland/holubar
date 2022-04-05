const NftRepository = require('./nft.repository');
const nftRepository = new NftRepository();


 
class NftService {

    async createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId) {

      

        try {
            var re = await nftRepository.createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId);
   
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
               //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
               console.log("nft token id dup error")
                return {
                    statusCode: 500,
                    responseBody: {
                        message: "nft token id dup error"
                    }
                };
           } else {
               //handleHttpErrors(err.message);
               return {
                statusCode: 500,
                responseBody: {
                    message: "error"
                }
            };
            }
        }
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
    //판매취소
    async cancel(assetId) {

        nftRepository.cancel(assetId);

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

    async testList(marketStatus,min,max,condition){

        let arr = [];
        arr.push(marketStatus);
        arr.push(min);
        arr.push(max);
        arr.push(condition);

        console.log(arr);

        var sellList = await nftRepository.testList(arr);

        

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

        console.log(d[0].asset_id)



        return {
            statusCode: 200,
            responseBody: {
                "assetId": d[0].asset_id,
                "userId": d[0].user_id,
                "assetName": d[0].asset_name,
                "assetDesc": d[0].asset_desc,
                "assetImageUrl": d[0].asset_image_url,
                "tokenId": d[0].token_id,
                "marketStatus": d[0].market_status,
                "price": d[0].price
            }
        };
    }

}

 
module.exports = NftService;