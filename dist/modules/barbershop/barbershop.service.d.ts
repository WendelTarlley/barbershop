import { PrismaService } from '../../prisma/prisma.service';
export declare class BarbershopService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getBarbershops(): Promise<any>;
    create(data: any): any;
    findOne(id: string): any;
    getBarbershopByName(barbershopName: string): Promise<any>;
}
