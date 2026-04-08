import { Controller, Get, Post, Body } from '@nestjs/common';
import { BarbershopService } from './barbershop.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';

@Controller('barbershops')
export class BarbershopController {
    constructor(private readonly barbershopService: BarbershopService) {}

    @Get()
    findAll() {
        return this.barbershopService.getBarbershops();
    }

    @Post()
    create(@Body() data: CreateBarbershopDto) {
        return this.barbershopService.create(data);
    }
}