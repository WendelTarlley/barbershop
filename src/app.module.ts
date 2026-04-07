import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarbershopModule } from './modules/barbershop/barbershop.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BarbershopModule, PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true, // Torna as variáveis disponíveis em todo o app
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
