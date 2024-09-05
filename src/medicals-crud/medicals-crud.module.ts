import { Module } from '@nestjs/common';
import { MedicalsCrudService } from './medicals-crud.service';
import { MedicalsCrudController } from './medicals-crud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalsCrud,
  MedicalsCrudSchema,
} from './entities/medicals-crud.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalsCrud.name, schema: MedicalsCrudSchema },
    ]),
  ],
  controllers: [MedicalsCrudController],
  providers: [MedicalsCrudService],
})
export class MedicalsCrudModule {}
