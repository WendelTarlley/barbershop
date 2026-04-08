import { Module } from '@nestjs/common';
import { BarbershopServiceService } from './barbershop-service.service';
import { BarbershopServiceController } from './barbershop-service.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BarbershopServiceController],
  providers: [BarbershopServiceService],
})
export class BarbershopServiceModule {}
