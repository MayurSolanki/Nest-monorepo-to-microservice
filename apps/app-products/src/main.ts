import { NestFactory } from '@nestjs/core';
import { AppProductsModule } from './app-products.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(AppProductsModule);
  // await app.listen(3001);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppProductsModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    },
  );


  await app.listen();
}
bootstrap();
