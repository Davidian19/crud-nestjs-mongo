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
exports.MedicalsCrudService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const medicals_crud_entity_1 = require("./entities/medicals-crud.entity");
const mongoose_2 = require("mongoose");
let MedicalsCrudService = class MedicalsCrudService {
    constructor(medicalsCrudModel) {
        this.medicalsCrudModel = medicalsCrudModel;
    }
    create(createMedicalsCrudDto) {
        const doctor = new this.medicalsCrudModel(createMedicalsCrudDto);
        return doctor.save();
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.medicalsCrudModel.find().skip(skip).limit(limit).exec(),
            this.medicalsCrudModel.countDocuments().exec(),
        ]);
        return {
            data,
            total,
            page,
            lastPage: Math.ceil(total / limit),
        };
    }
    findOne(id) {
        return this.medicalsCrudModel.findById(id).exec();
    }
    update(id, updateMedicalsCrudDto) {
        return this.medicalsCrudModel
            .findByIdAndUpdate(id, updateMedicalsCrudDto, { new: true })
            .exec();
    }
    remove(id) {
        return this.medicalsCrudModel.deleteOne({ _id: id }).exec();
    }
};
exports.MedicalsCrudService = MedicalsCrudService;
exports.MedicalsCrudService = MedicalsCrudService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(medicals_crud_entity_1.MedicalsCrud.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MedicalsCrudService);
//# sourceMappingURL=medicals-crud.service.js.map