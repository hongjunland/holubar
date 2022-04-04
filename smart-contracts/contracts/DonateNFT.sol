// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./token/ERC721/ERC721.sol";
import "./access/Ownable.sol";

/**
 * PJT Ⅰ - 과제 2) NFT Creator 구현
 * 상태 변수나 함수의 시그니처는 구현에 따라 변경할 수 있습니다.
 */
contract DonateNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    mapping(uint256 => string) tokenURIs;
    Tokens[] public tokens;

    struct Tokens {
        uint256 tokenId;
        string tokenURI;
        uint256 donateAmmount;
    }

    constructor() ERC721("DonateNFT", "Donation") {}

    function current() public view returns (uint256) {
        return _tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        return tokens[tokenId].tokenURI;
    }

    function create(
        address to,
        string memory _tokenURI,
        uint256 price
    ) public returns (uint256) {
        uint256 tokenId = tokens.length;
        tokens.push(Tokens(tokenId, _tokenURI, price));
        _mint(to, tokenId);

        return tokenId;
    }
}
