import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // private client: ClientProxy;

  constructor(
    @Inject('APP_PRODUCT') private tcpClient: ClientProxy,
    private readonly appService: AppService,
  ) {
    // this.client = ClientProxyFactory.create({
    //   transport: Transport.TCP,
    //   options: {
    //     host: '127.0.0.1',
    //     port: 3001,
    //   },
    // });
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  async getGreeting() {
    return this.tcpClient
      .send({ cmd: 'greet' }, 'NestJS Microservice MayurrrA')
      .toPromise();
  }
}
