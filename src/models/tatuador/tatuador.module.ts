import { Module } from '@nestjs/common';
import { TatuadorController } from './tatuador.controller';

@Module({
  controllers: [TatuadorController]
})
export class TatuadorModule {}
