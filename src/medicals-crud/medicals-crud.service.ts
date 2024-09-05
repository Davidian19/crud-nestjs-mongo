import { Injectable } from '@nestjs/common';
import { CreateMedicalsCrudDto } from './dto/create-medicals-crud.dto';
import { UpdateMedicalsCrudDto } from './dto/update-medicals-crud.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalsCrud } from './entities/medicals-crud.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicalsCrudService {
  constructor(
    @InjectModel(MedicalsCrud.name)
    private medicalsCrudModel: Model<MedicalsCrud>,
  ) {}

  create(createMedicalsCrudDto: CreateMedicalsCrudDto) {
    const doctor = new this.medicalsCrudModel(createMedicalsCrudDto);
    return doctor.save();
  }

  async findAll(page: number, limit: number) {
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

  findOne(id: string) {
    return this.medicalsCrudModel.findById(id).exec();
  }

  update(id: string, updateMedicalsCrudDto: UpdateMedicalsCrudDto) {
    return this.medicalsCrudModel
      .findByIdAndUpdate(id, updateMedicalsCrudDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.medicalsCrudModel.deleteOne({ _id: id }).exec();
  }
}
