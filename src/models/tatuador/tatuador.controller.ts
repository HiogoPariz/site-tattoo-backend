import { Controller, Get, Post } from '@nestjs/common';

@Controller('tatuador')
export class TatuadorController {

    @Post()
    save(): string {
        return 'tatuador save';
    }

    @Get()
    findAll(): string {
        return 'tatuador findAll';
    }
}
