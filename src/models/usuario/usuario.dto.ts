import { isNumber, isString } from 'class-validator';

export class UsuarioDto {
  nome: string;
  login: string;
  senha: string;
}
