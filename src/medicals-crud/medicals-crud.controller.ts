import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MedicalsCrudService } from './medicals-crud.service';
import { CreateMedicalsCrudDto } from './dto/create-medicals-crud.dto';
import { UpdateMedicalsCrudDto } from './dto/update-medicals-crud.dto';

@Controller('medicals-crud')
export class MedicalsCrudController {
  constructor(private readonly medicalsCrudService: MedicalsCrudService) {}

  @Post()
  async create(@Body() createMedicalsCrudDto: CreateMedicalsCrudDto) {
    const created = await this.medicalsCrudService.create(
      createMedicalsCrudDto,
    );
    return {
      message: 'Medical record created successfully',
      data: created,
    };
  }

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '5',
  ) {
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    if (isNaN(pageNumber) || isNaN(limitNumber)) {
      throw new HttpException('Invalid page or limit', HttpStatus.BAD_REQUEST);
    }
    const medicalRecords = await this.medicalsCrudService.findAll(
      pageNumber,
      limitNumber,
    );
    return {
      message: 'Medical records retrieved successfully',
      data: medicalRecords.data,
      total: medicalRecords.total,
      page: pageNumber,
      limit: limitNumber,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const medicalRecord = await this.medicalsCrudService.findOne(id);
    if (!medicalRecord) {
      throw new HttpException('Medical record not found', HttpStatus.NOT_FOUND);
    }
    return {
      message: 'Medical record retrieved successfully',
      data: medicalRecord,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMedicalsCrudDto: UpdateMedicalsCrudDto,
  ) {
    const updated = await this.medicalsCrudService.update(
      id,
      updateMedicalsCrudDto,
    );
    return {
      message: 'Medical record updated successfully',
      data: updated,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.medicalsCrudService.remove(id);
    return {
      message: 'Medical record deleted successfully',
    };
  }
}
