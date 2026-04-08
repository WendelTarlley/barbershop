import { BarbershopServiceService } from './barbershop-service.service';
import { CreateBarbershopServiceDto } from './dto/create-barbershop-service.dto';
import { UpdateBarbershopServiceDto } from './dto/update-barbershop-service.dto';
export declare class BarbershopServiceController {
    private readonly barbershopServiceService;
    constructor(barbershopServiceService: BarbershopServiceService);
    create(createBarbershopServiceDto: CreateBarbershopServiceDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateBarbershopServiceDto: UpdateBarbershopServiceDto): any;
    remove(id: string): any;
}
