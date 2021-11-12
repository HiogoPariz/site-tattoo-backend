import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudioModule } from './models/estudio/estudio.module';
import { TatuadorModule } from './models/tatuador/tatuador.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './models/usuario/usuario.module';
import { AuthService } from './authentication/auth/auth.service';
import { AuthModule } from './authentication/auth/auth.module';

const uri =
  'mongodb+srv://admin:ZZK2K7N16lKnuBc9@cluster0.nxhh4.mongodb.net/dev?retryWrites=true&w=majority';
@Module({
  imports: [MongooseModule.forRoot(uri), EstudioModule, TatuadorModule, UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
