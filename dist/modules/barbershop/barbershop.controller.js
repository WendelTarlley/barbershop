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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarbershopController = void 0;
const common_1 = require("@nestjs/common");
const barbershop_service_1 = require("./barbershop.service");
const create_barbershop_dto_1 = require("./dto/create-barbershop.dto");
let BarbershopController = class BarbershopController {
    barbershopService;
    constructor(barbershopService) {
        this.barbershopService = barbershopService;
    }
    findAll() {
        return this.barbershopService.getBarbershops();
    }
    create(data) {
        return this.barbershopService.create(data);
    }
    findOne(barbershopName) {
        return this.barbershopService.getBarbershopByName(barbershopName);
    }
    findById(id) {
        return this.barbershopService.findOne(id);
    }
};
exports.BarbershopController = BarbershopController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BarbershopController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_barbershop_dto_1.CreateBarbershopDto]),
    __metadata("design:returntype", void 0)
], BarbershopController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('barbershopName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BarbershopController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BarbershopController.prototype, "findById", null);
exports.BarbershopController = BarbershopController = __decorate([
    (0, common_1.Controller)('barbershops'),
    __metadata("design:paramtypes", [barbershop_service_1.BarbershopService])
], BarbershopController);
//# sourceMappingURL=barbershop.controller.js.map