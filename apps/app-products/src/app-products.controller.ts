import { Controller, Get } from '@nestjs/common';
import { AppProductsService } from './app-products.service';
import { MessagePattern } from '@nestjs/microservices';
import { ProductDTO } from '@app/my-library/common.dto';

@Controller('product')
export class AppProductsController {
  constructor(private readonly appProductsService: AppProductsService) {}

  @Get()
  getHello(): string {
    return this.appProductsService.getHello();
  }

  @MessagePattern('get_products_req')
  async handleProducts() {
    const result =  await  this.appProductsService.getProducts();
    return { success: true, result: result };
  }

  @MessagePattern('post_add_products_req')
  async handleProductAdded(productDTO: ProductDTO) {
    this.appProductsService.addProduct(productDTO.name, productDTO.price);
    return { success: true, result : {message: `Product ${productDTO.name} added successfully` } };
  }


  @MessagePattern({ cmd: 'greet' })
  greet(data: string): string {
    return `${data} Solankiii ji !! , How Are you`;
  }
}
