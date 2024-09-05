import { CreateMedicalsCrudDto } from './dto/create-medicals-crud.dto';
import { UpdateMedicalsCrudDto } from './dto/update-medicals-crud.dto';
import { MedicalsCrud } from './entities/medicals-crud.entity';
import { Model } from 'mongoose';
export declare class MedicalsCrudService {
    private medicalsCrudModel;
    constructor(medicalsCrudModel: Model<MedicalsCrud>);
    create(createMedicalsCrudDto: CreateMedicalsCrudDto): Promise<import("mongoose").Document<unknown, {}, MedicalsCrud> & MedicalsCrud & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(page: number, limit: number): Promise<{
        data: (import("mongoose").Document<unknown, {}, MedicalsCrud> & MedicalsCrud & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        total: number;
        page: number;
        lastPage: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, MedicalsCrud> & MedicalsCrud & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateMedicalsCrudDto: UpdateMedicalsCrudDto): Promise<import("mongoose").Document<unknown, {}, MedicalsCrud> & MedicalsCrud & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
