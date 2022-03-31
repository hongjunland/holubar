/**
 * 기부 서비스 
 * 
 */

 const DonationRepository = require('./donation.repository');
 const donationRepository = new DonationRepository();

 class DonationService {
    save(userId, price, nickname, profileIamgeUrl) {

        donationRepository.save(userId, price, nickname, profileIamgeUrl)

        return {
            statusCode: 201,
            responseBody: {
                message: "success"
            }
        };
    }

    async rank() {

        var rankList = await donationRepository.getRank()

        return {
            statusCode: 201,
            responseBody: {
                rankingList : rankList
            }
        };
    }
    
 
 }
 
 module.exports = DonationService;