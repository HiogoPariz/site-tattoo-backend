import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudioModule } from './models/estudio/estudio.module';
import { TatuadorModule } from './models/tatuador/tatuador.module';
import { MongooseModule } from '@nestjs/mongoose';

const uri =
  'mongodb+srv://admin:ZZK2K7N16lKnuBc9@cluster0.nxhh4.mongodb.net/dev?retryWrites=true&w=majority';
@Module({
  imports: [MongooseModule.forRoot(uri), EstudioModule, TatuadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
