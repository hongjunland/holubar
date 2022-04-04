const connection = require('../../config/connection').promise();

class NftRepository {

    createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId){

        var a = connection.query( `INSERT INTO asset(user_id,asset_name,asset_desc,asset_image_url,token_id) VALUE (?,?,?,?,?)`,[userId,assetName,assetDesc,assetImageUrl,tokenId]);
        
        return a;
    }

    sellNFT(assetId,price){
        connection.query( `UPDATE asset SET market_status = 1, price = (?) WHERE asset_id =?`,[price,assetId]);
    }

    async sellList(){

        var a = await connection.query(`SELECT * FROM asset WHERE market_status = 1`);
        console.log(a[0])
        return a[0];
    }



    saveTradeHistory(assetId, price, sellerId, buyerId){
        //거래내역저장
        connection.query(`INSERT INTO trade_history(asset_id,price,seller_id,buyer_id) VALUE (?,?,?,?)`,[assetId, price, sellerId, buyerId]);
        
        // 판매상태 0으로 변경
        connection.query(`UPDATE asset SET market_status = 0 WHERE asset_id = ?`,assetId);


    }

    async getTradeHistory(){
        var a = await connection.query(`SELECT * FROM trade_history`);
        return a[0];
    }
    async  getAssetDetails(assetId){
        var a = await connection.query(`SELECT * FROM asset WHERE asset_id = ?`,assetId);
        return a[0];




    }



}

module.exports = NftRepository;