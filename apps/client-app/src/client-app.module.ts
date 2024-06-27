import { Module } from '@nestjs/common';
import { ClientAppController } from './client-app.controller';
import { ClientAppService } from './client-app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
  ]),],
  controllers: [ClientAppController],
  providers: [ClientAppService],
})
export class ClientAppModule {}
