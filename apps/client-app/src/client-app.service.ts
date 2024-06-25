import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientAppService {
  getHello(): string {
    return 'Hello World! From Client Application';
  }
}
