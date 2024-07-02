import { Controller, Get } from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { UserDTO } from '@app/my-library/common.dto';

@Controller('user')
export class AppUserController {
  constructor(private readonly appUserService: AppUserService) {}

  @Get()
  getHello(): string {
    return this.appUserService.getHello();
  }

  //Broker-Based controller
  @EventPattern('post_create_user_req')
  userCreated(@Payload() userDTO: UserDTO) {
     // Business logic on event receive of User created , like send onboarding email
     console.log("Business logic on event user_created receive");
  }

 

 



}
