import { Test, TestingModule } from '@nestjs/testing';
import { FileNodeController } from './file-node.controller';

describe('FileNodeController', () => {
  let controller: FileNodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileNodeController],
    }).compile();

    controller = module.get<FileNodeController>(FileNodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
