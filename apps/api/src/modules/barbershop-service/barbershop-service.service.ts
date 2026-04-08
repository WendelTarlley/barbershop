import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBarbershopServiceDto } from './dto/create-barbershop-service.dto';
import { UpdateBarbershopServiceDto } from './dto/update-barbershop-service.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BarbershopServiceService {
  constructor(private prismaService: PrismaService) { }

  create(createBarbershopServiceDto: CreateBarbershopServiceDto) {
    const barbershop = this.prismaService.barbershop.findUnique({ where: { id: createBarbershopServiceDto.barbershopId } });
    if (!barbershop) {
      throw new NotFoundException('Barbershop not found');
    }

    const barbershopService = this.prismaService.barbershopService.create({ data: createBarbershopServiceDto });
    return barbershopService;
}

  findAll() {
    return this.prismaService.barbershopService.findMany();
  }

  findOne(id: string) {
    return this.prismaService.barbershopService.findUnique({ where: { id } });
  }

  update(id: string, updateBarbershopServiceDto: UpdateBarbershopServiceDto) {
    return this.prismaService.barbershopService.update({ where: { id }, data: updateBarbershopServiceDto });
  }

  remove(id: string) {
    return this.prismaService.barbershopService.delete({ where: { id } });
  }
}
