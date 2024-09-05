import { MedicalsCrudService } from './medicals-crud.service';
import { CreateMedicalsCrudDto } from './dto/create-medicals-crud.dto';
import { UpdateMedicalsCrudDto } from './dto/update-medicals-crud.dto';
export declare class MedicalsCrudController {
    private readonly medicalsCrudService;
    constructor(medicalsCrudService: MedicalsCrudService);
    create(createMedicalsCrudDto: CreateMedicalsCrudDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./entities/medicals-crud.entity").MedicalsCrud> & import("./entities/medicals-crud.entity").MedicalsCrud & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findAll(page?: string, limit?: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./entities/medicals-crud.entity").MedicalsCrud> & import("./entities/medicals-crud.entity").MedicalsCrud & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./entities/medicals-crud.entity").MedicalsCrud> & import("./entities/medicals-crud.entity").MedicalsCrud & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    update(id: string, updateMedicalsCrudDto: UpdateMedicalsCrudDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./entities/medicals-crud.entity").MedicalsCrud> & import("./entities/medicals-crud.entity").MedicalsCrud & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
