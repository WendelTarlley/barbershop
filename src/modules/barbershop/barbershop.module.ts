import { Module } from '@nestjs/common';
import { BarbershopController } from './barbershop.controller';
import { BarbershopService } from './barbershop.service';

@Module({
  controllers: [BarbershopController],
  providers: [BarbershopService]
})
export class BarbershopModule {}
