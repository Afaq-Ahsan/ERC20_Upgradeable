require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_API_KEY =
  "https://goerli.infura.io/v3/a9827dc8b1834ce2af8fb4988e074a07";
const GOERLI_PRIVATE_KEY =
  "203411f0871d05c1828dac6944e8651fb79d56a3d3e50231368ecb86a9b4d3d5";

module.exports = {
  solidity: "0.8.9",

  networks: {
    goerli: {
      url: `${INFURA_API_KEY}`, // infuraaa goerli API key
      accounts: [`${GOERLI_PRIVATE_KEY}`], //goerli private key of that address from you deploy it
    },
  },

  etherscan: {
    apiKey: "PSSCAPBUHR7U6DU7V8B2886WPVMTGEC7EY", //etherscan APIKey
  },
};