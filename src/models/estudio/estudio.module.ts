import { Module } from '@nestjs/common';
import { EstudioController } from './estudio.controller';
import { EstudioService } from './estudio.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Estudio, EstudioSchema } from './estudio.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Estudio.name, schema: EstudioSchema }])],
  controllers: [EstudioController],
  providers: [EstudioService]
})
export class EstudioModule {}
