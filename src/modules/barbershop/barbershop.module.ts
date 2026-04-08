import { Module } from '@nestjs/common';
import { BarbershopController } from './barbershop.controller';
import { BarbershopService } from './barbershop.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BarbershopController],
  providers: [BarbershopService]
})
export class BarbershopModule {}
