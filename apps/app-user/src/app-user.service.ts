import { Injectable } from '@nestjs/common';
import { formatName } from '@app/my-library/string.utils';

@Injectable()
export class AppUserService {
  getHello(): string {
    return formatName('Hello World! User');
  }
}

