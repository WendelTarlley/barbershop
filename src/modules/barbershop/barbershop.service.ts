import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BarbershopService {
    constructor(private prismaService: PrismaService) {}

    async getBarbershops() {
        return this.prismaService.barbershop.findMany();
    }
    create (data: any) {
        return this.prismaService.barbershop.create({
            data
        });
    }
}
