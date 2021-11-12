import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { identity } from 'rxjs';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  nome: string;

  @Prop()
  login: string;

  @Prop()
  senha: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);