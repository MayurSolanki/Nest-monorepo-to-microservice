import { Injectable } from '@nestjs/common';
import { formatName } from '@app/my-library/string.utils';
import { MessagePattern } from '@nestjs/microservices';



@Injectable()
export class AppUserService {

  getHello(): string {
    return formatName('Hello World! From User microservice');
  }
}
