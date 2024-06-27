import { Controller, Get } from '@nestjs/common';
import { AppProductsService } from './app-products.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('product')
export class AppProductsController {
  constructor(private readonly appProductsService: AppProductsService) {}

  @Get()
  getHello(): string {
    return this.appProductsService.getHello();
  }

  @MessagePattern('get_products')
  async handleProducts() {
    const result =  await  this.appProductsService.getProducts();
    return { success: true, result: result };
  }

  @MessagePattern('product_added')
  handleProductAdded(product: any) {
    this.appProductsService.addProduct(product.name, product.price);
    return { success: true, result : {message: `Product ${product.name} added successfully` } };
  }


  @MessagePattern({ cmd: 'greet' })
  greet(data: string): string {
    return `${data} Solankiii ji !! , How Are you`;
  }
}
