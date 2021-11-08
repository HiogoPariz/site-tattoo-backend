import { Test, TestingModule } from '@nestjs/testing';
import { EstudioController } from './estudio.controller';

describe('EstudioController', () => {
  let controller: EstudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudioController],
    }).compile();

    controller = module.get<EstudioController>(EstudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
