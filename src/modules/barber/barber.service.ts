import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BarberService {
  constructor(private prismaService: PrismaService) { }

  async create(createBarberDto: CreateBarberDto) {
    const barbershop = this.prismaService.barbershop.findUnique({ where: { id: createBarberDto.barbershopId } });
    if (!barbershop) {
      throw new NotFoundException('Barbershop not found');
    }
    const barber = await this.prismaService.barber.create({ data: createBarberDto });
    return this.toResponse(barber);
  }

  findAll() {
    return this.prismaService.barber.findMany();
  }

  async findOne(id: string) {
    const barber = await this.prismaService.barber.findUnique({ where: { id } });

    if (!barber) {
      throw new NotFoundException(`Barbeiro ${id} não encontrado`);
    }

    return this.toResponse(barber);
  }

  update(id: string, updateBarberDto: UpdateBarberDto) {
    return this.prismaService.barber.update({
      where: { id }, data: updateBarberDto
    });
  }

  remove(id: string) {
    return this.prismaService.barber.delete({ where: { id } });
  }

  private toResponse(barber: {
    id: string;
    name: string;
    cpf: string;
    active: boolean;
    barbershopId: string;
    createdAt: Date;
  }) {
    return {
      id: barber.id,
      name: barber.name,
      cpf: barber.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'), // formata na resposta
      active: barber.active,
      barbershopId: barber.barbershopId,
      createdAt: barber.createdAt,
    };
  }  
}

