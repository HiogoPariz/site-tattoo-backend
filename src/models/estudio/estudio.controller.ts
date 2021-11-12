import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/authentication/auth/authenticated.guard';
import { EstudioDto } from './estudio.dto';
import { EstudioService } from './estudio.service';

@Controller('estudio')
export class EstudioController {
  constructor(private readonly service: EstudioService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  async index() {
    return await this.service.findAll();
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Post()
  async create(@Body() createEstudioDto: EstudioDto) {
    return await this.service.create(createEstudioDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEstudioDto: EstudioDto) {
    return await this.service.update(id, updateEstudioDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
