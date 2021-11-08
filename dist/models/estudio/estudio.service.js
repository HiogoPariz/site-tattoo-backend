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
exports.EstudioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const estudio_schema_1 = require("./estudio.schema");
let EstudioService = class EstudioService {
    constructor(estudioModel) {
        this.estudioModel = estudioModel;
    }
    async create(createEstudioDto) {
        return await new this.estudioModel(createEstudioDto).save();
    }
    async update(id, updateEstudioDto) {
        return await this.estudioModel.findByIdAndUpdate(id, updateEstudioDto).exec();
    }
    async delete(id) {
        return await this.estudioModel.findByIdAndDelete(id).exec();
    }
    async findAll() {
        return await this.estudioModel.find().exec();
    }
    async findOne(id) {
        return await this.estudioModel.findById(id).exec();
    }
};
EstudioService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(estudio_schema_1.Estudio.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EstudioService);
exports.EstudioService = EstudioService;
//# sourceMappingURL=estudio.service.js.map