// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./access/Ownable.sol";
import "./token/ERC20/ERC20.sol";
import "./token/ERC721/ERC721.sol";
import "./DonateNFT.sol";

contract Market is Ownable {
    address public admin;
    address public NFTAddress;
    address public myAddress;
    mapping(uint256 => Sales) public sales;

    struct Sales {
        address seller;
    }

    event SendEther(
        address indexed sender,
        address indexed receiver,
        uint256 price
    );

    constructor() {
        admin = msg.sender;
        myAddress = address(this);
    }

    function setNFTAddress(address _NFTAddress) public {
        NFTAddress = _NFTAddress;
    }

    function getNFTAddress() public view returns (address) {
        return NFTAddress;
    }

    function newSale(address seller, uint256 tokenId) public returns (bool) {
        sales[tokenId] = Sales(seller);
        return true;
    }

    function deleteSale(uint256 tokenId) public returns (bool) {
        delete sales[tokenId];
        return true;
    }

    function getSales(uint256 tokenId) public view returns (Sales memory) {
        return sales[tokenId];
    }

    function getAdmin() public view returns (address) {
        return admin;
    }

    function trading(uint256 tokenId) public payable returns (bool) {
        address buyer = msg.sender;
        address payable seller = payable(sales[tokenId].seller);
        emit SendEther(buyer, seller, msg.value);
        seller.transfer(msg.value);

        DonateNFT(NFTAddress).transferFrom(address(this), buyer, tokenId);

        deleteSale(tokenId);

        return true;
    }

    function donating(
        address donateGetter,
        string memory assetName,
        string memory assetDesc,
        string memory assetImageUrl
    ) public payable returns (DonateNFT.Tokens memory) {
        address donatingAddress = msg.sender;
        address payable getter = payable(donateGetter);
        getter.transfer(msg.value);

        return
            DonateNFT(NFTAddress).create(
                donatingAddress,
                assetName,
                assetDesc,
                assetImageUrl,
                msg.value
            );
    }
}
