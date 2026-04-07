import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Passamos a URL diretamente no super
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    } as any); // O 'as any' evita aquele erro de "Object literal may only specify known properties"
  }

  async onModuleInit() {
    console.log('Conectando ao banco de dados...');
    try {
      await this.$connect();
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar ao banco:', error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}