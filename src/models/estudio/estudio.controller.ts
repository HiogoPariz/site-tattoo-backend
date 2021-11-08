import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EstudioDto } from './estudio.dto';
import { EstudioService } from './estudio.service';

@Controller('estudio')
export class EstudioController {
  constructor(private readonly service: EstudioService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createEstudioDto: EstudioDto) {
    return await this.service.create(createEstudioDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEstudioDto: EstudioDto) {
    return await this.service.update(id, updateEstudioDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
