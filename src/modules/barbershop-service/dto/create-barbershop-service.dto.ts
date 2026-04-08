import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBarbershopServiceDto {
    @IsNotEmpty()
    name!: string;
    @IsNotEmpty()
    @IsNumber()
    price!: number;
    @IsNotEmpty()
    @IsNumber()
    durationMinutes!: number;
    @IsNotEmpty()
    barbershopId!: string;
}
