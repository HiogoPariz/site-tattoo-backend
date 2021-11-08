import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudioModule } from './models/estudio/estudio.module';
import { TatuadorModule } from './models/tatuador/tatuador.module';

@Module({
  imports: [EstudioModule, TatuadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
