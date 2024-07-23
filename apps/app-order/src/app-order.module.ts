import { Module } from '@nestjs/common';
import { AppOrderController } from './app-order.controller';
import { AppOrderService } from './app-order.service';

@Module({
  imports: [],
  controllers: [AppOrderController],
  providers: [AppOrderService],
})
export class AppOrderModule {}
