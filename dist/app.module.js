"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const estudio_module_1 = require("./models/estudio/estudio.module");
const tatuador_module_1 = require("./models/tatuador/tatuador.module");
const mongoose_1 = require("@nestjs/mongoose");
const uri = 'mongodb+srv://admin:ZZK2K7N16lKnuBc9@cluster0.nxhh4.mongodb.net/dev?retryWrites=true&w=majority';
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRoot(uri), estudio_module_1.EstudioModule, tatuador_module_1.TatuadorModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map