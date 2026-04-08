"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarbershopModule = void 0;
const common_1 = require("@nestjs/common");
const barbershop_controller_1 = require("./barbershop.controller");
const barbershop_service_1 = require("./barbershop.service");
const prisma_module_1 = require("../../prisma/prisma.module");
let BarbershopModule = class BarbershopModule {
};
exports.BarbershopModule = BarbershopModule;
exports.BarbershopModule = BarbershopModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [barbershop_controller_1.BarbershopController],
        providers: [barbershop_service_1.BarbershopService]
    })
], BarbershopModule);
//# sourceMappingURL=barbershop.module.js.map