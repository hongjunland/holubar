/**
 * /donation APIs
 */
 const express = require('express');
 const router = express.Router();
 const DonationService = require('./donation.service');
 const donationService = new DonationService();




 /**
 * 기부 내역 저장 API
 */
 router.post('/save',  async function (req, res) {

    const userId = req.body.userId;
	const price = req.body.price;
	const nickname = req.body.nickname;
	const profileIamgeUrl = req.body.profileIamgeUrl;


    const { statusCode, responseBody } = await donationService.save(userId, price, nickname, profileIamgeUrl);



	res.statusCode = statusCode;
	res.send(responseBody);
});

/**
 * 기부 랭킹 10위 조회
 */
router.get('/rank',  async function (req, res) {



    const { statusCode, responseBody } = await donationService.rank();



	res.statusCode = statusCode;
	res.send(responseBody);
});




module.exports = router;