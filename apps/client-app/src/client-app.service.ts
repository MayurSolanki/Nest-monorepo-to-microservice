import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

interface OrderById {
  findOne(data:{ "id": number} ): Observable<any>;
}

@Injectable()
export class ClientAppService  {

  constructor() {}



  getHello(): string {
    return 'Hello World! From Client Application';
  }
}
