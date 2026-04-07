import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarbershopModule } from './modules/barbershop/barbershop.module';
import { BarbershopController } from './modules/barbershop/barbershop.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BarbershopModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
