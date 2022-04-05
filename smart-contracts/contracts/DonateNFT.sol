// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./token/ERC721/ERC721.sol";
import "./access/Ownable.sol";
import "./Market.sol";

/**
 * PJT Ⅰ - 과제 2) NFT Creator 구현
 * 상태 변수나 함수의 시그니처는 구현에 따라 변경할 수 있습니다.
 */
contract DonateNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    address public MarketAddress;
    mapping(uint256 => string) tokenURIs;
    Tokens[] public tokens;

    struct Tokens {
        address owner;
        string assetName;
        string assetDesc;
        uint256 tokenId;
        string tokenURI;
        uint256 donateAmmount;
    }

    constructor() ERC721("DonateNFT", "Donation") {}

    function setMarketAddress(address _MarketAddress) public {
        MarketAddress = _MarketAddress;
    }

    function getMarketAddress() public view returns (address) {
        return MarketAddress;
    }

    function current() public view returns (uint256) {
        return _tokenIds;
    }

    function getTokenById(uint256 tokenId) public view returns (Tokens memory) {
        return tokens[tokenId];
    }

    function create(
        address owner,
        string memory assetName,
        string memory assetDesc,
        string memory _tokenURI,
        uint256 price
    ) public returns (Tokens memory) {
        _mint(owner, _tokenIds);

        tokens.push(
            Tokens(owner, assetName, assetDesc, _tokenIds, _tokenURI, price)
        );
        _tokenIds++;

        return tokens[_tokenIds - 1];
    }

    function getTokensByWallet(address target)
        public
        view
        returns (Tokens[] memory)
    {
        Tokens[] memory ret = new Tokens[](tokens.length);
        uint256 j = 0;
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i].owner == target) {
                ret[j] = tokens[i];
                j++;
            }
        }

        return ret;
    }

    function newSale(uint256 tokenId, uint256 price) public {
        transferFrom(msg.sender, MarketAddress, tokenId);
        Market(MarketAddress).newSale(msg.sender, tokenId, price);
    }
}
