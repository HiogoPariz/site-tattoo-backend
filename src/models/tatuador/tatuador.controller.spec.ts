import { Test, TestingModule } from '@nestjs/testing';
import { TatuadorController } from './tatuador.controller';

describe('TatuadorController', () => {
  let controller: TatuadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TatuadorController],
    }).compile();

    controller = module.get<TatuadorController>(TatuadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
