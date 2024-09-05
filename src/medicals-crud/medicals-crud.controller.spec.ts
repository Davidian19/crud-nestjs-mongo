import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsCrudController } from './medicals-crud.controller';
import { MedicalsCrudService } from './medicals-crud.service';

describe('MedicalsCrudController', () => {
  let controller: MedicalsCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalsCrudController],
      providers: [MedicalsCrudService],
    }).compile();

    controller = module.get<MedicalsCrudController>(MedicalsCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
