import { NestFactory } from '@nestjs/core';
import { AppUserModule } from './app-user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppUserModule);
  await app.listen(3002);
}
bootstrap();
