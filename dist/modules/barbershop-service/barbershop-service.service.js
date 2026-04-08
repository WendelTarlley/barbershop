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
exports.BarbershopServiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BarbershopServiceService = class BarbershopServiceService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createBarbershopServiceDto) {
        const barbershop = this.prismaService.barbershop.findUnique({ where: { id: createBarbershopServiceDto.barbershopId } });
        if (!barbershop) {
            throw new common_1.NotFoundException('Barbershop not found');
        }
        const barbershopService = this.prismaService.barbershopService.create({ data: createBarbershopServiceDto });
        return barbershopService;
    }
    findAll() {
        return this.prismaService.barbershopService.findMany();
    }
    findOne(id) {
        return this.prismaService.barbershopService.findUnique({ where: { id } });
    }
    update(id, updateBarbershopServiceDto) {
        return this.prismaService.barbershopService.update({ where: { id }, data: updateBarbershopServiceDto });
    }
    remove(id) {
        return this.prismaService.barbershopService.delete({ where: { id } });
    }
};
exports.BarbershopServiceService = BarbershopServiceService;
exports.BarbershopServiceService = BarbershopServiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BarbershopServiceService);
//# sourceMappingURL=barbershop-service.service.js.map