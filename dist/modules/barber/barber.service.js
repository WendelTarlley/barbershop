"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarberService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BarberService = class BarberService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createBarberDto) {
        const barbershop = this.prismaService.barbershop.findUnique({ where: { id: createBarberDto.barbershopId } });
        if (!barbershop) {
            throw new common_1.NotFoundException('Barbershop not found');
        }
        const barber = await this.prismaService.barber.create({ data: createBarberDto });
        return this.toResponse(barber);
    }
    findAll() {
        return this.prismaService.barber.findMany();
    }
    async findOne(id) {
        const barber = await this.prismaService.barber.findUnique({ where: { id } });
        if (!barber) {
            throw new common_1.NotFoundException(`Barbeiro ${id} não encontrado`);
        }
        return this.toResponse(barber);
    }
    update(id, updateBarberDto) {
        return this.prismaService.barber.update({
            where: { id }, data: updateBarberDto
        });
    }
    remove(id) {
        return this.prismaService.barber.delete({ where: { id } });
    }
    toResponse(barber) {
        return {
            id: barber.id,
            name: barber.name,
            cpf: barber.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
            active: barber.active,
            barbershopId: barber.barbershopId,
            createdAt: barber.createdAt,
        };
    }
};
exports.BarberService = BarberService;
exports.BarberService = BarberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BarberService);
//# sourceMappingURL=barber.service.js.map