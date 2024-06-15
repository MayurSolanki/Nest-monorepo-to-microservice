import { Injectable } from '@nestjs/common';

@Injectable()
export class AppProductsService {
  getHello(): string {
    return 'Hello World! Product';
  }
}
