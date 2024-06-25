import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  await app.listen(3003, () => {
    Logger.log('Listening at http://localhost:' + 3003);
  });

 // await app.listen();
}
bootstrap();
