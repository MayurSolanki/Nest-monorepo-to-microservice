import { Module } from '@nestjs/common';
import { AppProductsController } from './app-products.controller';
import { AppProductsService } from './app-products.service';

@Module({
  imports: [],
  controllers: [AppProductsController],
  providers: [AppProductsService],
})
export class AppProductsModule {}
