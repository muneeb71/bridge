// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Remix style import
//import { ERC20 } from "@openzeppelin/contracts@4.0.0/token/ERC20/ERC20.sol";

//Brownie style import
import '@OpenZeppelin/contracts/token/ERC20/ERC20.sol';


contract ImperialCredits is ERC20 {
    uint256 initialSupply = 1000;
    constructor() ERC20("ImperialsCredits", "ICR") {
        _mint(msg.sender, initialSupply);
    }
}