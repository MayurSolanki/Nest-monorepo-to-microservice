import { Module } from '@nestjs/common';
import { ClientAppController } from './client-app.controller';
import { ClientAppService } from './client-app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [ClientsModule.register([
     {
      name: 'API_GATEWAY',
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3005,
      },
    },
    {
      name: 'APP_ORDER',
      transport: Transport.GRPC,
      options: {
        package: 'order',
        protoPath: join(__dirname, 'order/order.proto'),
        url: '127.0.0.1:3006',
      },
    },
  ]),],
  controllers: [ClientAppController],
  providers: [ClientAppService],
})
export class ClientAppModule {}
