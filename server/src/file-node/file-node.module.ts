import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileNode } from './file-node.entity';
import { FileNodeService } from './file-node.service';
import { FileNodeController } from './file-node.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileNode]),
  ],
  providers: [FileNodeService],
  controllers: [FileNodeController]
})
export class FileNodeModule {}
