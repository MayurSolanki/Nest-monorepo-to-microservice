import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  // microservice #1
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3005,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3003);

  //const app = await NestFactory.create(ApiGatewayModule);
  // await app.listen(3003, () => {
  //   Logger.log('Listening at http://localhost:' + 3003);
  // });
  // await app.listen();
}
bootstrap();
