import { NestFactory } from '@nestjs/core';
import { AppProductsModule } from './app-products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppProductsModule);
  await app.listen(3001);
}
bootstrap();
