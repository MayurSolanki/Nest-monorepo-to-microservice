import { Body, Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { ClientAppService } from './client-app.service';
import axios from 'axios';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ClientAppController {
  private readonly apiUrl = 'http://localhost:3003';

  @Get('products-api')
  async getProductsApi() {
    try {
      const response = await axios.get(`${this.apiUrl}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  constructor(
    @Inject('API_GATEWAY') private readonly apiGateway: ClientProxy,
    private readonly clientAppService: ClientAppService,
  ) {}

  @Get('products')
  async getProducts() {
    try {
      const response = this.apiGateway.send('get_products', 'get_products_req');
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }


  @Get('users')
  async getUsers() {
    try {
      const response = await axios.get(`${this.apiUrl}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  @Post('add-product')
  async addProduct(@Body() body: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/add-product`, body);
      return {
         status : response.status,
         message : "Product Created"
      }
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }

  @Post('create-user')
  async createUser(@Body() body: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/create-user`, body);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  @Get()
  getHello(): string {
    return this.clientAppService.getHello();
  }
}
