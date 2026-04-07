# Usa uma imagem leve do Node
FROM node:20-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências primeiro (otimiza o cache)
COPY package*.json ./

# Instala as dependências dentro do ambiente Linux do container
RUN npm install

# Copia o restante dos arquivos do seu projeto
COPY . .

COPY prisma ./prisma/
RUN npx prisma generate

# Comando para rodar o NestJS em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]

