/**
 * sales table Manipulations
 * sales 테이블에 접근합니다.
 */
 const connection = require('../../config/connection').promise();

 class UserRepository {







     /**
     * 회원가입 기능
     * 
     */
    signUp(walletAddress){

        connection.query( `INSERT INTO user(wallet_address) VALUE (?)`,walletAddress);
    }
  

    /**
     * 프로필 조회 기능
     * 
     */
	async getProfileByUserId(userId) {

        var a = await connection.query( `SELECT * FROM user WHERE user_id =?`,userId);

        return a;
	}

    async getProfileByWalletAddress(walletAddress) {
   
        var a = await connection.query( `SELECT * FROM user WHERE wallet_address =?`,walletAddress);

        return a;
	}

   
    /**
     * 프로필 수정 기능
     * 
     */
    editProfileByWalletAddress(email,walletAddress,nickname,profileImageUrl,bio){
        var a = connection.query( `UPDATE user SET email = (?), nickname = (?), profile_image_url = (?), bio = (?) WHERE wallet_address =?`,[email,nickname,profileImageUrl,bio,walletAddress]);
        return a;
    }
}

module.exports = UserRepository;