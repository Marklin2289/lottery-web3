// Raffle

// Enter the lottery (paying some amount)
// Pick a random number (verifiable random)
// Winner to be selected every X minutes => completly automated
// Chainlink oracle -> Ransomness, Automated Excution(Chainlink Kepper)

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Raffle {
    /*Error functions */
    error Raffle__NotEnoughETHEntered();

    /*State Variables */
    uint256 private immutable i_entranceFee;
    address payable[] private s_players;

    /* Events */
    event RaffleEnter(address indexed player);

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }

    function enterRaffle() public payable {
        // require(msg.value > i_entranceFee, "Not enough ETH!") // gas fee too much
        if (msg.value < i_entranceFee) {
            revert Raffle__NotEnoughETHEntered();
        }
        //adding players who enter raffle into players array. (payable is important)
        s_players.push(payable(msg.sender));
        // Emit an event when we update a dynamic array or mapping
        // Named events with the function name reversed
        emit RaffleEnter(msg.sender);
    }

    // function pickRandomWinner() {}

    // getter functions
    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }

    function getPlayer(uint256 index) public view returns (address) {
        return s_players[index];
    }
}
