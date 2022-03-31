/**
 * donation table Manipulations
 * donation 테이블에 접근합니다.
 */
const connection = require('../../config/connection').promise();

class DonationRepository{

    //기부내역 저장
    save(userId, price, nickname, profileIamgeUrl){

        connection.query( `INSERT INTO donation(user_id,price,nickname,profile_image_url) VALUE (?,?,?,?)`,[userId, price, nickname, profileIamgeUrl]);
    }

    //기부랭킹 10등까지 가져오기
    async getRank(){

        var a = await connection.query( `select profile_image_url,nickname, sum(price) from donation group by user_id order by sum(price) desc limit 10;`);
        
        return a[0];
    }

}

module.exports = DonationRepository;