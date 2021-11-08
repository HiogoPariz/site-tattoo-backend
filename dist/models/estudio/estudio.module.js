"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudioModule = void 0;
const common_1 = require("@nestjs/common");
const estudio_controller_1 = require("./estudio.controller");
const estudio_service_1 = require("./estudio.service");
const mongoose_1 = require("@nestjs/mongoose");
const estudio_schema_1 = require("./estudio.schema");
let EstudioModule = class EstudioModule {
};
EstudioModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: estudio_schema_1.Estudio.name, schema: estudio_schema_1.EstudioSchema }])],
        controllers: [estudio_controller_1.EstudioController],
        providers: [estudio_service_1.EstudioService]
    })
], EstudioModule);
exports.EstudioModule = EstudioModule;
//# sourceMappingURL=estudio.module.js.map