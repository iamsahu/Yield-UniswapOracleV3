require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
var alchemy = process.env.ALCHEMY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.0",
	networks: {
		hardhat: {
			forking: {
				url: "https://eth-mainnet.alchemyapi.io/v2/0IDNQrZAvvBVLnfjVix5uQMYuObc7_gP",
				blockNumber: 13228121,
			},
		},
	},
};
