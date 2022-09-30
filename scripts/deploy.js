const {ethers,upgrades} = require("hardhat");

async function main(){

 const PHOENIX_TOKEN = await ethers.getContractFactory("PHOENIX_TOKEN");
 const phoenix_token = await upgrades.deployProxy(PHOENIX_TOKEN,[22,44],{//this line mean Box_v1 deploy and passing argument in initializer function which is 22
  initializer : 'initialize',
  //             initialize is the function which is used as constructor in upgradeable contracts
 });

 const a = await phoenix_token.deployed();

 console.log("#################### : ",a);
 console.log("Box deployed to ",phoenix_token.address);

}
main();