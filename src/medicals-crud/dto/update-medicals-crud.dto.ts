import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalsCrudDto } from './create-medicals-crud.dto';

export class UpdateMedicalsCrudDto extends PartialType(CreateMedicalsCrudDto) {}
