import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BarbershopService {
    constructor(private prismaService: PrismaService) { }

    async getBarbershops() {
        return this.prismaService.barbershop.findMany();
    }

    create(data: any) {
        return this.prismaService.barbershop.create({
            data
        });
    }

    findOne(id: string) {
      const barbershop = this.prismaService.barbershop.findUnique({ where: { id },
        include: {barbers: true} });

        if (!barbershop) {
            throw new NotFoundException('Barbershop not found');
        }
      return barbershop;
    }


    async getBarbershopByName(barbershopName: string) {
        return this.prismaService.barbershop.findMany({
            where: {
                name: {
                    contains: barbershopName,
                    mode: 'insensitive'
                }
            },
            include: {
                barbers: true,
                services: true
            }
        });
    }
}
