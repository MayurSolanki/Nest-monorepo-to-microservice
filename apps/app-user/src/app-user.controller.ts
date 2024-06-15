import { Controller, Get } from '@nestjs/common';
import { AppUserService } from './app-user.service';

@Controller('user')
export class AppUserController {
  constructor(private readonly appUserService: AppUserService) {}

  @Get()
  getHello(): string {
    return this.appUserService.getHello();
  }
}
