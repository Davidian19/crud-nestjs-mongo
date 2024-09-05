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
exports.MedicalsCrudController = void 0;
const common_1 = require("@nestjs/common");
const medicals_crud_service_1 = require("./medicals-crud.service");
const create_medicals_crud_dto_1 = require("./dto/create-medicals-crud.dto");
const update_medicals_crud_dto_1 = require("./dto/update-medicals-crud.dto");
let MedicalsCrudController = class MedicalsCrudController {
    constructor(medicalsCrudService) {
        this.medicalsCrudService = medicalsCrudService;
    }
    async create(createMedicalsCrudDto) {
        const created = await this.medicalsCrudService.create(createMedicalsCrudDto);
        return {
            message: 'Medical record created successfully',
            data: created,
        };
    }
    async findAll(page = '1', limit = '5') {
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);
        if (isNaN(pageNumber) || isNaN(limitNumber)) {
            throw new common_1.HttpException('Invalid page or limit', common_1.HttpStatus.BAD_REQUEST);
        }
        const medicalRecords = await this.medicalsCrudService.findAll(pageNumber, limitNumber);
        return {
            message: 'Medical records retrieved successfully',
            data: medicalRecords.data,
            total: medicalRecords.total,
            page: pageNumber,
            limit: limitNumber,
        };
    }
    async findOne(id) {
        const medicalRecord = await this.medicalsCrudService.findOne(id);
        if (!medicalRecord) {
            throw new common_1.HttpException('Medical record not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            message: 'Medical record retrieved successfully',
            data: medicalRecord,
        };
    }
    async update(id, updateMedicalsCrudDto) {
        const updated = await this.medicalsCrudService.update(id, updateMedicalsCrudDto);
        return {
            message: 'Medical record updated successfully',
            data: updated,
        };
    }
    async remove(id) {
        await this.medicalsCrudService.remove(id);
        return {
            message: 'Medical record deleted successfully',
        };
    }
};
exports.MedicalsCrudController = MedicalsCrudController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicals_crud_dto_1.CreateMedicalsCrudDto]),
    __metadata("design:returntype", Promise)
], MedicalsCrudController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MedicalsCrudController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicalsCrudController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medicals_crud_dto_1.UpdateMedicalsCrudDto]),
    __metadata("design:returntype", Promise)
], MedicalsCrudController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicalsCrudController.prototype, "remove", null);
exports.MedicalsCrudController = MedicalsCrudController = __decorate([
    (0, common_1.Controller)('medicals-crud'),
    __metadata("design:paramtypes", [medicals_crud_service_1.MedicalsCrudService])
], MedicalsCrudController);
//# sourceMappingURL=medicals-crud.controller.js.map