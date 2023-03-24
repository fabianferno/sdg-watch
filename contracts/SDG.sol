pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC1155, Ownable {

    mapping(address => mapping(uint256 => uint256)) private _balances;
    mapping(address => bool) private _whitelist;
    mapping (uint256 => string) private _tokenURIs;


    uint256 public SDG_ID = 0;

    //sdg token id

    //get ipfs url
    constructor() ERC1155("baseURI") {}

    function uri(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC1155Metadata: URI query for nonexistent token");
        string memory _tokenURI = _tokenURIs[tokenId];
        return bytes(_tokenURI).length > 0 ? string(abi.encodePacked(_tokenURI)) : super.uri(tokenId);
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return bytes(_tokenURIs[tokenId]).length > 0;
    }

    function setTokenURI(uint256 tokenId, string memory tokenURI) public onlyOwner {
        _tokenURIs[tokenId] = tokenURI;
    }
    
    function addToWhitelist(address account) public onlyOwner {
        _whitelist[account] = true;
    }

    function removeFromWhitelist(address account) public onlyOwner {
        _whitelist[account] = false;
    }

    function mintSDG(address account, uint256 amount, string memory tokenURI,bytes memory data) public {
        require(_whitelist[account], "Account is not whitelisted");
        _mint(account, SDG_ID, amount, data);
        _balances[account][SDG_ID] += amount;
        setTokenURI(SDG_ID, tokenURI);
        SDG_ID++;
    }

    function transferSDG(address from, address to, uint256 amount) public {
        require(msg.sender == from || msg.sender == owner(), "Caller is not from or owner");
        require(_balances[from][SDG_ID] >= amount, "Insufficient balance");
        _balances[from][SDG_ID] -= amount;
        _balances[to][SDG_ID] += amount;
        _safeTransferFrom(from, to, SDG_ID, amount, "");
    }

    function burnSDG(address account, uint256 amount) public {
        require(msg.sender == account || msg.sender == owner(), "Caller is not account or owner");
        require(_balances[account][SDG_ID] >= amount, "Insufficient balance");
        _burn(account, SDG_ID, amount);
        _balances[account][SDG_ID] -= amount;
    }

    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data) public override {
        require(id == SDG_ID, "Invalid token ID");
        require(_balances[from][id] >= amount, "Insufficient balance");
        _balances[from][id] -= amount;
        _balances[to][id] += amount;
        _safeTransferFrom(from, to, id, amount, data);
}

function safeBatchTransferFrom(address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public override {
    require(ids.length == amounts.length, "Arrays length mismatch");
    for (uint256 i = 0; i < ids.length; i++) {
        require(ids[i] == SDG_ID, "Invalid token ID");
        require(_balances[from][ids[i]] >= amounts[i], "Insufficient balance");
        _balances[from][ids[i]] -= amounts[i];
        _balances[to][ids[i]] += amounts[i];
    }
    _safeBatchTransferFrom(from, to, ids, amounts, data);
}

}