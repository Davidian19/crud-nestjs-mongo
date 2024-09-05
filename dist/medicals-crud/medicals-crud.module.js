"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalsCrudModule = void 0;
const common_1 = require("@nestjs/common");
const medicals_crud_service_1 = require("./medicals-crud.service");
const medicals_crud_controller_1 = require("./medicals-crud.controller");
const mongoose_1 = require("@nestjs/mongoose");
const medicals_crud_entity_1 = require("./entities/medicals-crud.entity");
let MedicalsCrudModule = class MedicalsCrudModule {
};
exports.MedicalsCrudModule = MedicalsCrudModule;
exports.MedicalsCrudModule = MedicalsCrudModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: medicals_crud_entity_1.MedicalsCrud.name, schema: medicals_crud_entity_1.MedicalsCrudSchema },
            ]),
        ],
        controllers: [medicals_crud_controller_1.MedicalsCrudController],
        providers: [medicals_crud_service_1.MedicalsCrudService],
    })
], MedicalsCrudModule);
//# sourceMappingURL=medicals-crud.module.js.map