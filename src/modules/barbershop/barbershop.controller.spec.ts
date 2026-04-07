import { Test, TestingModule } from '@nestjs/testing';
import { BarbershopController } from './barbershop.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { BarbershopService } from './barbershop.service';


describe('BarbershopController', () => {
  let appModule: TestingModule; // Declare com o tipo TestingModule
  let controller: BarbershopController;

  beforeEach(async () => {
    appModule = await Test.createTestingModule({
      controllers: [BarbershopController],
      providers: [BarbershopService, PrismaService],
    }).compile();

    controller = appModule.get<BarbershopController>(BarbershopController);
  });

  // Aqui é onde o erro desaparece
  afterAll(async () => {
    if (appModule) {
      await appModule.close();
    }
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});