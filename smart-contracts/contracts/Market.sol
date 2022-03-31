// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./access/Ownable.sol";
import "./token/ERC20/ERC20.sol";
import "./token/ERC721/ERC721.sol";
import "./DonateNFT.sol";

contract Market is Ownable {
    address public admin;
    address[] public sales;

    event NewSale(
        address indexed _saleContract,
        address indexed _owner,
        uint256 _workId
    );

    constructor() {
        admin = msg.sender;
    }

    function createSale(
        uint256 itemId,
        uint256 price,
        address currencyAddress,
        address nftAddress
    ) public returns (address) {
        Sale newSale = new Sale(admin);
    }

    function allSales() public view returns (address[] memory) {
        return sales;
    }
}

contract Sale {
    address public seller;
    address public buyer;
    address admin;
    uint256 public price;
    uint256 public tokenId;
    address public currencyAddress;
    address public nftAddress;

    // 현재 최고 입찰 상태
    address public highestBidder;
    uint256 public highestBid;

    IERC20 public erc20Contract;
    IERC721 public erc721Constract;

    event HighestBidIncereased(address bidder, uint256 amount);
    event SaleEnded(address winner, uint256 amount);

    constructor(
        address _admin,
        address _seller,
        address _buyer,
        uint256 _tokenId,
        uint256 _price,
        address _currencyAddress,
        address _nftAddress
    ) {
        require(_price > 0);
        tokenId = _tokenId;
        price = _price;
        seller = _seller;
        buyer = _buyer;
        admin = _admin;
        currencyAddress = _currencyAddress;
        nftAddress = _nftAddress;
        erc20Contract = IERC20(_currencyAddress);
        erc721Constract = IERC721(_nftAddress);
    }

    function purchase() public {
        // TODO
    }

    function getSaleInfo()
        public
        view
        returns (
            uint256,
            uint256,
            address,
            address
        )
    {
        return (price, tokenId, currencyAddress, nftAddress);
    }

    function _getCurrencyAmount() private view returns (uint256) {
        return erc20Contract.balanceOf(msg.sender);
    }

    // modifier를 사용하여 함수 동작 조건을 재사용하는 것을 권장합니다.
    modifier onlySeller() {
        require(msg.sender == seller, "Sale: You are not seller.");
        _;
    }
}
