import { Test, TestingModule } from '@nestjs/testing';
import { FileNodeService } from './file-node.service';

describe('FileNodeService', () => {
  let service: FileNodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileNodeService],
    }).compile();

    service = module.get<FileNodeService>(FileNodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
