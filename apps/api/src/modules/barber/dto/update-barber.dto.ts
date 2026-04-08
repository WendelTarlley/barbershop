import { PartialType } from '@nestjs/mapped-types';
import { CreateBarberDto } from './create-barber.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBarberDto extends PartialType(CreateBarberDto) {
    @IsNotEmpty()
    @IsString()
    id!:string
}
