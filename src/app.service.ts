import { Injectable } from '@nestjs/common';
import {ethers} from 'ethers'

import * as tokenModule from "./assets/Mytokenabi.json"

const CONTRACT_ADDRESS = "0x06b1Fe6dA5D664d43e2585df42047344B0cfa905";

@Injectable()
export class AppService {
  async totalSupply() {
    const provider = ethers.getDefaultProvider('goerli')
    const contract = new ethers.Contract(CONTRACT_ADDRESS , tokenModule.abi , provider)
    const totalSupplyBN = await  contract.totalSupply()
    return ethers.utils.formatEther(totalSupplyBN);
  }
  
  async allowance(owner: string , spender: string) {
    const provider = ethers.getDefaultProvider('goerli')
    const contract = new ethers.Contract(CONTRACT_ADDRESS , tokenModule.abi , provider)
    const totalSupplyBN = await  contract.allowance(owner , spender)
    return ethers.utils.formatEther(totalSupplyBN);
  }
  

}
