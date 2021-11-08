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
exports.EstudioController = void 0;
const common_1 = require("@nestjs/common");
const estudio_dto_1 = require("./estudio.dto");
const estudio_service_1 = require("./estudio.service");
let EstudioController = class EstudioController {
    constructor(service) {
        this.service = service;
    }
    async index() {
        return await this.service.findAll();
    }
    async find(id) {
        return await this.service.findOne(id);
    }
    async create(createEstudioDto) {
        return await this.service.create(createEstudioDto);
    }
    async update(id, updateEstudioDto) {
        return await this.service.update(id, updateEstudioDto);
    }
    async delete(id) {
        return await this.service.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstudioController.prototype, "index", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstudioController.prototype, "find", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [estudio_dto_1.EstudioDto]),
    __metadata("design:returntype", Promise)
], EstudioController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, estudio_dto_1.EstudioDto]),
    __metadata("design:returntype", Promise)
], EstudioController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstudioController.prototype, "delete", null);
EstudioController = __decorate([
    common_1.Controller('estudio'),
    __metadata("design:paramtypes", [estudio_service_1.EstudioService])
], EstudioController);
exports.EstudioController = EstudioController;
//# sourceMappingURL=estudio.controller.js.map