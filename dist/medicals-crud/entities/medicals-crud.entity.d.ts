import { HydratedDocument } from 'mongoose';
export type MedicalsCrudtDocument = HydratedDocument<MedicalsCrud>;
export declare class MedicalsCrud {
    name: string;
    specialty: string;
    crm: string;
    phone: string;
    email: string;
    hiringDate: Date;
    startAttendance: string;
    endAttendance: string;
    status: boolean;
    actions: string[];
}
export declare const MedicalsCrudSchema: import("mongoose").Schema<MedicalsCrud, import("mongoose").Model<MedicalsCrud, any, any, any, import("mongoose").Document<unknown, any, MedicalsCrud> & MedicalsCrud & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MedicalsCrud, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MedicalsCrud>> & import("mongoose").FlatRecord<MedicalsCrud> & {
    _id: import("mongoose").Types.ObjectId;
}>;
