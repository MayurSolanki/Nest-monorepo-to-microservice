import { Test, TestingModule } from '@nestjs/testing';
import { ClientAppController } from './client-app.controller';
import { ClientAppService } from './client-app.service';

describe('ClientAppController', () => {
  let clientAppController: ClientAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientAppController],
      providers: [ClientAppService],
    }).compile();

    clientAppController = app.get<ClientAppController>(ClientAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientAppController.getHello()).toBe('Hello World!');
    });
  });
});
