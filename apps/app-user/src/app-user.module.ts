import { Module } from '@nestjs/common';
import { AppUserController } from './app-user.controller';
import { AppUserService } from './app-user.service';
import { MyLibraryModule } from '@app/my-library';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'APP_USER',
        transport: Transport.REDIS,
        options: {
          host: '127.0.0.1',
          port: 6379,
          retryAttempts: 5,
          retryDelay: 3000,
        },
      },
    ]),
    MyLibraryModule,
  ],
  controllers: [AppUserController],
  providers: [AppUserService],
})
export class AppUserModule {}
