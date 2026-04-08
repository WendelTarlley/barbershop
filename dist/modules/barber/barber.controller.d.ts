import { BarberService } from './barber.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
export declare class BarberController {
    private readonly barberService;
    constructor(barberService: BarberService);
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
}
