import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class BarberService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createBarberDto: CreateBarberDto): Promise<{
        id: string;
        name: string;
        cpf: string;
        active: boolean;
        barbershopId: string;
        createdAt: Date;
    }>;
    findAll(): any;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        cpf: string;
        active: boolean;
        barbershopId: string;
        createdAt: Date;
    }>;
    update(id: string, updateBarberDto: UpdateBarberDto): any;
    remove(id: string): any;
    private toResponse;
}
