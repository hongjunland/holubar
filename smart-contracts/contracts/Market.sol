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
        uint256 price;
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

    function newSale(
        address seller,
        uint256 tokenId,
        uint256 price
    ) public {
        DonateNFT(NFTAddress).transferFrom(msg.sender, address(this), tokenId);
        sales[tokenId] = Sales(seller, price);
    }

    function deleteSale(uint256 tokenId) public {
        delete sales[tokenId];
    }

    function getSales(uint256 tokenId) public view returns (Sales memory) {
        return sales[tokenId];
    }

    function getAdmin() public view returns (address) {
        return admin;
    }

    function trading(uint256 tokenId) public payable {
        address buyer = msg.sender;
        address payable seller = payable(sales[tokenId].seller);
        emit SendEther(buyer, seller, sales[tokenId].price);
        seller.transfer(sales[tokenId].price);

        DonateNFT(NFTAddress).transferFrom(address(this), buyer, tokenId);

        deleteSale(tokenId);
    }

    function donating(address donateGetter, string memory _tokenURI)
        public
        payable
    {
        address donatingAddress = msg.sender;
        address payable getter = payable(donateGetter);
        getter.transfer(msg.value);

        DonateNFT(NFTAddress).create(donatingAddress, _tokenURI, msg.value);
    }
}
