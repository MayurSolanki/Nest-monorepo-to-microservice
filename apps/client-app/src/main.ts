import { NestFactory } from '@nestjs/core';
import { ClientAppModule } from './client-app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ClientAppModule);


  await app.listen(3004, () => {
    Logger.log('Listening at http://localhost:' + 3004);
  });
  // await app.listen(3004);
}
bootstrap();
