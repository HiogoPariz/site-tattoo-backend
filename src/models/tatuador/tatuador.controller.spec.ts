import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticatedGuard } from '../../authentication/auth/authenticated.guard';
import { TatuadorController } from './tatuador.controller';

describe('TatuadorController', () => {
  let controller: TatuadorController;
  let provider: AuthenticatedGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TatuadorController],
      imports: [AuthenticatedGuard],
    }).compile();

    controller = module.get<TatuadorController>(TatuadorController);
    provider = module.get<AuthenticatedGuard>(AuthenticatedGuard);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(provider).toBeDefined();
  });
});
