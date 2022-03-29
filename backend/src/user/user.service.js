/**
 * Services Logics related to Sale
 * Service/Repository 레이어의 함수를 호출해야합니다.
 */
 const UserRepository = require('./user.repository');
 const userRepository = new UserRepository();
 
 class UserService {
 
    /**
	 * 프로필 조회    서비스
	 */
    async signUp(walletAddress) {

        userRepository.signUp(walletAddress);

        return {
            statusCode: 201,
            responseBody: {
                result: "success"
            }
        };
    }

    /**
	 * 프로필 조회    서비스
	 */
    async getProfileWithUserId(userId) {

        var profile = await userRepository.getProfileByUserId(userId);
        
        //null처리
        if(!profile[0][0]){
        
            return{
                statusCode: 204,
                responseBody: {
                    result: "profile null"
                }
            }
        }
        
        return {
            statusCode: 200,
            responseBody: {
                userId : userId,
                email : profile[0][0].email,
                walletAddress : profile[0][0].wallet_address,
                nickname : profile[0][0].nickname,
                profileImageUrl : profile[0][0].profile_image_url,
                bio : profile[0][0].bio
            }
        };
       

       
    }

    async getProfileWithWalletAddress(walletAddress) {

        var profile = await userRepository.getProfileByWalletAddress(walletAddress);
       
        
        //null처리
        if(!profile[0][0]){

            return{
                statusCode: 204,
                responseBody: {
                    result: "null"
                }
            }
        }

        return {
            statusCode: 200,
            responseBody: {
                userId : profile[0][0].user_id,
                email : profile[0][0].email,
                walletAddress : walletAddress,
                nickname : profile[0][0].nickname,
                profileImageUrl : profile[0][0].profile_image_url,
                bio : profile[0][0].bio
            }
        };
    }

    /**
	 * 프로필 수정    서비스
	 */
     async editProfile(email,walletAddress,nickname,profileImageUrl,bio) {

        userRepository.editProfileByWalletAddress(email,walletAddress,nickname,profileImageUrl,bio);
    
    
    
            return {
                statusCode: 200,
                responseBody: {
                    result: "success"
                }
            };
        }
 
 }
 
 module.exports = UserService;