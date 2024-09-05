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
exports.MedicalsCrudSchema = exports.MedicalsCrud = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let MedicalsCrud = class MedicalsCrud {
};
exports.MedicalsCrud = MedicalsCrud;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MedicalsCrud.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MedicalsCrud.prototype, "specialty", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MedicalsCrud.prototype, "crm", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MedicalsCrud.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MedicalsCrud.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], MedicalsCrud.prototype, "hiringDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MedicalsCrud.prototype, "startAttendance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MedicalsCrud.prototype, "endAttendance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], MedicalsCrud.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], MedicalsCrud.prototype, "actions", void 0);
exports.MedicalsCrud = MedicalsCrud = __decorate([
    (0, mongoose_1.Schema)()
], MedicalsCrud);
exports.MedicalsCrudSchema = mongoose_1.SchemaFactory.createForClass(MedicalsCrud);
//# sourceMappingURL=medicals-crud.entity.js.map