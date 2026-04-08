import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarbershopModule } from './modules/barbershop/barbershop.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BarberModule } from './modules/barber/barber.module';
import { BarbershopServiceModule } from './modules/barbershop-service/barbershop-service.module';

@Module({
  imports: [
    BarbershopModule,
    PrismaModule,
    BarberModule,
    BarbershopServiceModule,
    ConfigModule.forRoot({
      isGlobal: true, // Torna as variáveis disponíveis em todo o app
    }),
    BarberModule,
    BarbershopServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
