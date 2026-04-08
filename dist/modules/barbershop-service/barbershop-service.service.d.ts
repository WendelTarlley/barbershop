import { CreateBarbershopServiceDto } from './dto/create-barbershop-service.dto';
import { UpdateBarbershopServiceDto } from './dto/update-barbershop-service.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class BarbershopServiceService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createBarbershopServiceDto: CreateBarbershopServiceDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateBarbershopServiceDto: UpdateBarbershopServiceDto): any;
    remove(id: string): any;
}
