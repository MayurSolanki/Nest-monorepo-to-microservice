import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ClientAppService } from './client-app.service';
import axios from 'axios';

@Controller()
export class ClientAppController {
  private readonly apiUrl = 'http://localhost:3003';

  constructor(private readonly clientAppService: ClientAppService) {}

  @Get('products')
  async getProducts() {
    try {
      const response = await axios.get(`${this.apiUrl}/products`);
      return response.data;
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
  async addProduct(@Body() body : any ) {
    try {
      const response = await axios.post(`${this.apiUrl}/add-product`,body);
      return response.data;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }

  @Post('create-user')
  async createUser(@Body() body : any) {
    try {
      const response = await axios.post(`${this.apiUrl}/create-user`,body);
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
