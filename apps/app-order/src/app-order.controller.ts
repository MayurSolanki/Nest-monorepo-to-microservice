import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppOrderService } from './app-order.service';

export interface OrderById {
  id: number;
}

export interface Order {
  id: number;
  name: string;
}

@Controller('order')
export class AppOrderController {
  constructor(private readonly appOrderService: AppOrderService) {}

  @GrpcMethod('OrderService', 'FindOne')
  findOne(data: OrderById,metadata: Metadata,call: ServerUnaryCall<any, any>,): Order {
    const items = [
      { id: 1, name: 'Mobile' },
      { id: 2, name: 'Laptop' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
