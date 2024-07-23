import { Test, TestingModule } from '@nestjs/testing';
import { AppOrderController } from './app-order.controller';
import { AppOrderService } from './app-order.service';

describe('AppOrderController', () => {
  let appOrderController: AppOrderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppOrderController],
      providers: [AppOrderService],
    }).compile();

    appOrderController = app.get<AppOrderController>(AppOrderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appOrderController.getHello()).toBe('Hello World!');
    });
  });
});
