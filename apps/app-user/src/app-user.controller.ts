import { Controller, Get } from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('user')
export class AppUserController {
  constructor(private readonly appUserService: AppUserService) {}

  @Get()
  getHello(): string {
    return this.appUserService.getHello();
  }

  //Broker-Based controller
  @EventPattern('user_created')
  userCreated(@Payload() data: any) {
     // Business logic on event receive of User created , like send onboarding email
     console.log("Business logic on event user_created receive");
  }

 

 



}
