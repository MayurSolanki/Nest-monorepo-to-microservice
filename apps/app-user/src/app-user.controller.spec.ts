import { Test, TestingModule } from '@nestjs/testing';
import { AppUserController } from './app-user.controller';
import { AppUserService } from './app-user.service';

describe('AppUserController', () => {
  let appUserController: AppUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppUserController],
      providers: [AppUserService],
    }).compile();

    appUserController = app.get<AppUserController>(AppUserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appUserController.getHello()).toBe('Hello World!');
    });
  });
});
