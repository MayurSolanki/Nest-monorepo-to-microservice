import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import {
  Client,
  Transport,
  ClientProxy,
  EventPattern,
  Payload,
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  // @Client({ transport: Transport.TCP, options: { port: 3001 } })
  // private readonly productMiService: ClientProxy;
  // @Client({ transport: Transport.TCP, options: { port: 3002 } })
  // private readonly userMiService: ClientProxy;

  constructor(
    @Inject('APP_PRODUCT') private productMiService: ClientProxy,
    @Inject('APP_USER') private userMiService: ClientProxy,
    private readonly apiGatewayService: ApiGatewayService,
  ) {}
  //

  @Get('products')
  async getProducts() {
    // Forward the request to Microservice A using message pattern
    const result = await this.productMiService
      .send('get_products', 'get_products_req')
      .toPromise();
    return result;
  }

  @Post('add-product')
  async addProduct(@Body() body: any) {
    const result = await this.productMiService
      .emit('product_added', body)
      .toPromise();
     
    return result;
  }

  @Get('users')
  async getUsers() {
    // Forward the request to Microservice A using Event pattern
    const result = await this.userMiService
      .emit('get_users_req', {})
      .toPromise();
    return result;
  }

  @Post('create-user')
  async createUser(@Body() body: any) {
    return this.userMiService.emit('user_created', body);
  }

  @MessagePattern('get_products')
  async handleProducts() {
    const result = await this.productMiService
      .send('get_products', 'get_products_req')
      .toPromise();
    return result;
  }

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }
}
