import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ClientAppService } from './client-app.service';
import axios from 'axios';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { ProductDTO, UserDTO } from '@app/my-library/common.dto';
import { Observable, timeout } from 'rxjs';

interface OrderById {
  findOne(data:{ "id": number} ): Observable<any>;
}

@Controller()
export class ClientAppController {
  private readonly apiUrl = 'http://localhost:3003';

  private orderByIdService: OrderById;

  @Get('products-api')
  async getProductsApi() {
    try {
      const response = await axios.get(`${this.apiUrl}/products-api`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  constructor(
    @Inject('API_GATEWAY') private readonly apiGateway: ClientProxy,
    @Inject('APP_ORDER') private readonly clientGRPC: ClientGrpc,
    private readonly clientAppService: ClientAppService,
  ) {
    this.orderByIdService = this.clientGRPC.getService<OrderById>('OrderService');
  }

  @Get('products')
  async getProducts() {
    try {
      const response = this.apiGateway.send(
        'get_products_req',
        'get_products_data',
      );
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  @Post('add-product')
  async addProduct(@Body() productDTO: ProductDTO) {
    try {
      const response = await this.apiGateway.send(
        'post_add_products_req',
        productDTO,
      );
      return response;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }
  // =====================================================================================

  @Post('create-user')
  async createUser(@Body() userDTO: UserDTO) {
    try {
      const response = await this.apiGateway
        .send('post_create_user_req', userDTO)
        .pipe(timeout(5000))
        .toPromise();
      return {
        message: 'post_create_user_req received',
      };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // ============ gRPC communication from Client App to Order APP =======
  @Get('order/:id')
  async getOrder(@Param('id') id: number) {
    try {
     const response = await  this.orderByIdService.findOne({id: id});
      return response;
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  }

  @Get()
  getHello(): string {
    return this.clientAppService.getHello();
  }
}
