// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract PHOENIXTOKENUpgradeable is Initializable,ERC20Upgradeable,OwnableUpgradeable{

    // constructor() ERC20("PHOENIX","PHX"){  

      uint public value1;
      uint public value2;
      
  //  function initialize(uint _val1,uint _val2)external initializer{

  //    __ERC20_init("PHOENIX","PHX");
  //    __Ownable_init();
  //    value1 = _val1;
  //    value2 = _val2;

  //  }

    function mint(address to,uint amount)external onlyOwner{
            _mint(to,amount);
        }
 
   function increment()public{
    value1+=1;
    value2+=1;
   }

   
    
    
}
