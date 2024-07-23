import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

// export interface OrderById {
//   id: number;
// }

// export interface Order {
//   id: number;
//   name: string;
// }

@Injectable()
export class AppOrderService {
  // private readonly orders: Order[] = [
  //   { id: 1, name: 'Mobile' },
  //   { id: 2, name: 'Laptop' }
  // ];

  // @GrpcMethod() //'OrderService','FindOne'
  // findOne(data: OrderById, metadata: Metadata, call: ServerUnaryCall<any, any>):Order{
  //      return this.orders.find((order)=> order.id === data.id)
  // }

  // getHello(): string {
  //   return 'Hello World!';
  // }
}
