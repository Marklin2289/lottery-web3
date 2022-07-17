const { developmentChains, networkConfig } = require("../../helper-hardhat-config")
const { network, ethers, getNamedAccounts, deployments } = require("hardhat")
const { assert, expect } = require("chai")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle Staging Test", function () {
          let raffle, raffleEntranceFee, deployer

          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              raffle = await ethers.getContract("Raffle", deployer)
              raffleEntranceFee = await raffle.getEntranceFee()
          })

          describe("fulfillRandomWords", function () {
              it("works with live Chainlink Keepers and Chainlink VRF, we get a random winner", async () => {
                  // enter the raffle
                  const startingTimeStamp = raffle.getLatestTimeStamp()

                  //   setup listener before we enter the raffle
                  // Just in case the blockchain moves REALLY fast

                  // await raffle.enterRaffle({ value: raffleEntranceFee})
              })
          })
      })
