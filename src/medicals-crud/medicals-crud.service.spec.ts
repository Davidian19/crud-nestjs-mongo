import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsCrudService } from './medicals-crud.service';

describe('MedicalsCrudService', () => {
  let service: MedicalsCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalsCrudService],
    }).compile();

    service = module.get<MedicalsCrudService>(MedicalsCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
