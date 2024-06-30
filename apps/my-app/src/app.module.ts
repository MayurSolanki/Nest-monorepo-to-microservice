import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLibraryModule } from '@app/my-library';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MyLibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
