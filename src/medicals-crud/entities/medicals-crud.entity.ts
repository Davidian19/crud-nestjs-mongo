import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MedicalsCrudtDocument = HydratedDocument<MedicalsCrud>;

@Schema()
export class MedicalsCrud {
  @Prop()
  name: string;

  @Prop()
  specialty: string;

  @Prop()
  crm: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  hiringDate: Date;

  @Prop()
  startAttendance: string;

  @Prop()
  endAttendance: string;

  @Prop()
  status: boolean;

  @Prop()
  actions: string[];
}

export const MedicalsCrudSchema = SchemaFactory.createForClass(MedicalsCrud);
