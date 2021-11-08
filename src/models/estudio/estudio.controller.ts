import { Body, Controller, Get, Post } from '@nestjs/common';
import { EstudioDto } from './estudio.dto';

@Controller('estudio')
export class EstudioController {

    @Post('/')
    save(@Body() estudio: EstudioDto ): void {
        return null;
    }

    @Get('/')
    findAll(): EstudioDto[] {
        return [];
    }

}
