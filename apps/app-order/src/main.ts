import { NestFactory } from '@nestjs/core';
import { AppOrderModule } from './app-order.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppOrderModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'order',
        protoPath: join(__dirname, 'order/order.proto'),
        url: '127.0.0.1:3006',
      },
    },
  );
  await app.listen();
}
bootstrap();
