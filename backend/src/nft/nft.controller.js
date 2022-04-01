const express = require('express');
 const router = express.Router();
 const NftService = require('./nft.service');
 const nftService = new NftService();

  //jwt
  const jwt = require('../jwt/jwt');
  const authUtil =  require('../jwt/auth').checkToken;

  //image s3 upload
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('../S3/s3')

//nft 등록
router.post('/create', authUtil, upload.single('image'), async function (req, res) {

    var tempImageUrl = ''
	//s3에 이미지 저장 후 url return
	const file = req.file
	const result = await uploadFile(file)
	await unlinkFile(file.path)
	// const description = req.body.description
	tempImageUrl = `https://holuba.s3.ap-northeast-2.amazonaws.com/${result.Key}`


    const userId = req.body.userId;
    const assetName = req.body.assetName;
    const assetDesc = req.body.assetDesc;
    const assetImageUrl = tempImageUrl;
    const tokenId = req.body.tokenId;
   

    const { statusCode, responseBody } = await nftService.createNFT(userId,assetName,assetDesc,assetImageUrl,tokenId);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});

//판매 등록

router.put('/trade/sell',authUtil,  async function (req, res) {

    const assetId = req.body.assetId;
    const price = req.body.price;

    const { statusCode, responseBody } = await nftService.sellNFT(assetId,price);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});


//판매목록조회

router.get('/trade/sellList',authUtil,  async function (req, res) {

  

    const { statusCode, responseBody } = await nftService.sellList();
 


	res.statusCode = statusCode;
	res.send(responseBody);
});


//거래내역저장

router.post('/trade/save',authUtil,  async function (req, res) {
    
    const assetId = req.body.assetId;
    const price = req.body.price;
    const sellerId = req.body.sellerId;
    const buyerId = req.body.buyerId;
    


    const { statusCode, responseBody } = await nftService.saveTradeHistory(assetId, price, sellerId, buyerId);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});

//거래내역 조회
router.get('/trade/history',authUtil,  async function (req, res) {
    
    const { statusCode, responseBody } = await nftService.getTradeHistory();
 


	res.statusCode = statusCode;
	res.send(responseBody);
});

//토큰 상세 조회
router.get('/:assetId',authUtil,  async function (req, res) {
    
    const assetId = req.params.assetId;
    const { statusCode, responseBody } = await nftService.getAssetDetails(assetId);
 


	res.statusCode = statusCode;
	res.send(responseBody);
});


module.exports = router;