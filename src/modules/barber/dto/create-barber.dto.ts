import { IsNotEmpty, IsString } from "class-validator";

export class CreateBarberDto {
    @IsString()
    @IsNotEmpty()
    name!: string;
    @IsString()
    @IsNotEmpty()
    cpf!: string;
    @IsString()
    @IsNotEmpty()
    barbershopId!: string;
}
