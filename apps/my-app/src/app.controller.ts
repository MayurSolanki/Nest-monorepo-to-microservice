import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // private client: ClientProxy;

  constructor(
    private readonly appService: AppService,
  ) {
   
  }

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }
 
}
