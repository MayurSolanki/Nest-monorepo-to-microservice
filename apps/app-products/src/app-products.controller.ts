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

  @MessagePattern({ cmd: 'greet' })
  greet(data: string): string {
    return `${data} Solankiii ji !! `;
  }
}
