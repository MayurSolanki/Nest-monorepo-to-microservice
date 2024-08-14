import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import {
  Client,
  Transport,
  ClientProxy,
  EventPattern,
  Payload,
  MessagePattern,
} from '@nestjs/microservices';
import { timeout } from 'rxjs';
import { ProductDTO, UserDTO } from '@app/my-library/common.dto';

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

  @Get('products-api')
  async getProductsApi() {
    // Forward the request to Microservice A using message pattern
    const result = await this.productMiService
      .send('get_products_req', 'get_products_data')
      .pipe(timeout(5000)) // always use time out to prevent unncessarily long time wait.
      .toPromise();
    return result;
  }

  @MessagePattern('get_products_req')
  async getProducts() {
    // Forward the request to Microservice A using message pattern
    const result = await this.productMiService
      .send('get_products_req', 'get_products_data')
      .pipe(timeout(5000)) // always use time out to prevent unncessarily long time wait.
      .toPromise();
    return result;
  }

  @MessagePattern('post_add_products_req')
  async addProduct(@Body() productDTO: ProductDTO) {
    const result = await this.productMiService
      .send('post_add_products_req', productDTO)
      .pipe(timeout(5000))
      .toPromise();
    return result;
  }

  // ============ Emit Event ======================================================
  @MessagePattern('post_create_user_req')
  async createUser(@Body() userDTO: UserDTO) {
    this.userMiService.emit('post_create_user_req', userDTO);
    //.pipe(defaultIfEmpty([]));
    // return result;
  }

  // ============ gRPC Communication ==============================================

  // @MessagePattern('get_order_req')
  // async getOrder(id: number) {
  //    this.orderMiService.emit('get_order_req', userDTO);
  //   //.pipe(defaultIfEmpty([]));
  //   // return result;
  // }

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }
}
