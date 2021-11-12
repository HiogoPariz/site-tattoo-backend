import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: UsuarioDto) {
    return await this.service.create(createUsuarioDto);
  }
}
