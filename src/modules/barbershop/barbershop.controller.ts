import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('barbershops')
export class BarbershopController {

    @Get()
    findAll() {
        return 'Listando barbearias';
    }

    @Post()
    create(@Body() data: any) {
        return {
            message: 'Barbearia criada',
            data
        };
    }
}