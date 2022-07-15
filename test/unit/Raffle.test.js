const { developmentChains, networkConfig } = require("../../helper-hardhat-config")
const { network, ethers, getNamedAccounts, deployments } = require("hardhat")
const { assert } = require("chai")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle Unit Test", function () {
          let raffle, vrfCoordinatorV2Mock
          const chainId = network.config.chainId
          beforeEach(async () => {
              const { deployer } = await getNamedAccounts()
              await deployments.fixture(["all"])
              //   accounts = await ethers.getSigners()
              //   deployer = accounts[0]
              //   player = accounts[1]
              raffle = await ethers.getContract("Raffle", deployer)
              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer)
          })
          describe("constructor", async function () {
              it("Initializes the raffle correctly", async function () {
                  // Ideally we make our tests have just 1 assert per "it"
                  const raffleState = await raffle.getRaffleState()
                  const interval = await raffle.getInterval()
                  assert.equal(raffleState.toString(), "0")
                  assert.equal(interval.toString(), networkConfig[chainId]["interval"])
              })
          })
      })