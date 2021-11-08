import { Module } from '@nestjs/common';
import { EstudioController } from './estudio.controller';
import { EstudioService } from './estudio.service';

@Module({
  controllers: [EstudioController],
  providers: [EstudioService]
})
export class EstudioModule {}
