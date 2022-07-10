const { network } = require("hardhat")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    //how you deploy raffle contract
    const raffle = await deploy("Raffle", {
        from: deployer,
        args: [], //ton of args
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}
