import { NestFactory } from '@nestjs/core';
import { AppUserModule } from './app-user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(AppUserModule);
  //await app.listen(3002);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppUserModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', //
        port: 3002,
      },
    },
  );

  await app.listen();
}
bootstrap();
