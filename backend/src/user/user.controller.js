/**
 * /user APIs
 */
 const express = require('express');
 const router = express.Router();
 const UserService = require('./user.service');
 const userService = new UserService();

 const jwt = require('../jwt/jwt');
 const authUtil =  require('../jwt/auth').checkToken;

 /**
 * 로그인 기능
 * 최초 로그인이면 지갑주소로 insert
 */
 router.post('/login', async function (req, res) {
	
	const walletAddress = req.body.walletAddress;

	var { statusCode, responseBody } = await userService.getProfileWithWalletAddress(walletAddress);
	
	// 첫 로그인 responseBody 가 null  signup실행
	if(!responseBody.userId){
		console.log('in');
		await userService.signUp(walletAddress);
	}
	// signup 후 null정보 가져오기
	var { statusCode, responseBody } = await userService.getProfileWithWalletAddress(walletAddress);


	//jwt토큰생성
	const jwtToken = await jwt.sign(responseBody.userId);
	responseBody.accessToken = jwtToken.token;

	res.statusCode = statusCode;
	res.send(responseBody);
});



/**
 * 프로필 조회 기능
 * 
 */
 router.get('/profile/:userId',authUtil, async function (req, res) {

	const userId = req.params.userId;
	
	console.log(userId);

	var { statusCode, responseBody } = await userService.getProfileWithUserId(userId);


	res.statusCode = statusCode;
	res.send(responseBody);
	
});

/**
 * 프로필 수정 기능
 * 
 */
 router.put('/profile/edit',authUtil, async function (req, res) {

	const email = req.body.email;
	const walletAddress = req.body.walletAddress;
	const nickname = req.body.nickname;
	const profileImageUrl = req.body.profileImageUrl;
	const bio = req.body.bio;


	
	const { statusCode, responseBody } = await userService.editProfile(email,walletAddress,nickname,profileImageUrl,bio);
 
	res.statusCode = statusCode;
	res.send(responseBody);
 
});

module.exports = router;
