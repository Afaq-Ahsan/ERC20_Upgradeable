const {ethers,upgrade} = require("hardhat");
const proxy = "0x81aA543e71cB6F3d06be5343265e55365CE2A9ab"; //address where proxy is deployed 
async function main() {
    
    const PHOENIXTOKENUpgradeable = await ethers.getContractFactory("PHOENIXTOKENUpgradeable");
   const a = await upgrades.upgradeProxy(proxy,PHOENIXTOKENUpgradeable);
    console.log("PHOENIX TOKEN has been upgraded",a.address);    

}

main();