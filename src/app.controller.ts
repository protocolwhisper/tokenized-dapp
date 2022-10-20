
import { Controller, Get , Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("totalsupply") // Don't use camel case
  totalSupply() {
    return this.appService.totalSupply() ;
  }
  @Get("allowance") // Don't use camel case
  allowance(@Query("owner") owner: string , @Query('spender') spender: string) {
    return this.appService.allowance(owner , spender) ;
  }

}

