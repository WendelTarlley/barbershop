import { BarbershopService } from './barbershop.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
export declare class BarbershopController {
    private readonly barbershopService;
    constructor(barbershopService: BarbershopService);
    findAll(): Promise<any>;
    create(data: CreateBarbershopDto): any;
    findOne(barbershopName: string): Promise<any>;
    findById(id: string): any;
}
