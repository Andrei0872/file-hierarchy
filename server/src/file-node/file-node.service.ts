import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileNodeDTO, UpdateFileNodeDTO } from './file-node.dto';
import { FileNode } from './file-node.entity';

@Injectable()
export class FileNodeService {
  constructor(
    @InjectRepository(FileNode)
    private fileNodeRepository: Repository<FileNode>,
  ) { }

  getRoots (): Promise<FileNode[]> {
    return this.fileNodeRepository.find({
      where: {
        parent_folder_id: null
      }
    });
  }

  async createFileNode (createFileNodeDTO: CreateFileNodeDTO) {
    return await this.fileNodeRepository.save(createFileNodeDTO);
  }

  async createChildFileNode (createFileNodeDTO: CreateFileNodeDTO) {
    await this.fileNodeRepository.save(createFileNodeDTO);

    return this.getExpandedFolder(createFileNodeDTO.parent_folder_id);
  }

  async updateFileNode (updateFileNodeDTO: UpdateFileNodeDTO) {
    await this.fileNodeRepository.save(updateFileNodeDTO);

    return this.fileNodeRepository.findOne({
      where: {
        id: updateFileNodeDTO.id
      }
    })
  }

  async getExpandedFolder (id: number) {
    const children = await this.fileNodeRepository.find({
      where: {
        parent_folder_id: id
      }
    });

    const parent = await this.fileNodeRepository.findOne({
      where: {
        id,
      }
    });

    return {
      ...parent,
      children,
    }
  }
}
