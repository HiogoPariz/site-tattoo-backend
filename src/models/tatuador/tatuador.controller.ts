import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/authentication/auth/authenticated.guard';

@Controller('tatuador')
export class TatuadorController {

    @UseGuards(AuthenticatedGuard)
    @Post()
    save(): string {
        return 'tatuador save';
    }

    @UseGuards(AuthenticatedGuard)
    @Get()
    findAll(): string {
        return 'tatuador findAll';
    }
}
