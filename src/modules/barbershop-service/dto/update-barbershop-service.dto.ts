import { PartialType } from '@nestjs/mapped-types';
import { CreateBarbershopServiceDto } from './create-barbershop-service.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateBarbershopServiceDto extends PartialType(CreateBarbershopServiceDto) {
    @IsNotEmpty()
    appointmentServiceId!: string;
    @IsNotEmpty()
    barberServiceId!: string;

}
