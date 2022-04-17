import { Body, Controller, Get, HttpService, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateFileNodeDTO, UpdateFileNodeDTO } from './file-node.dto';
import { FileNodeService } from './file-node.service';
import { Response } from 'express'

@Controller('file-node')
export class FileNodeController {
  constructor (
    private readonly fileNodeService: FileNodeService
  ) {}
  
  @Get('/roots')
  getRoots () {
    return this.fileNodeService.getRoots();
  }

  @Post()
  async createFileNode (@Res() res: Response, @Body() createFileNodeDTO: CreateFileNodeDTO) {
    const newFileNode = await this.fileNodeService.createFileNode(createFileNodeDTO)

    res.status(HttpStatus.CREATED).json(newFileNode);
  }

  // TODO: validate `parent_folder_id` is not null
  @Post('child')
  async createChildFileNode (@Res() res: Response, @Body() createFileNodeDTO: CreateFileNodeDTO) {
    const updatedFileNode = await this.fileNodeService.createChildFileNode(createFileNodeDTO);

    res.status(HttpStatus.CREATED).json(updatedFileNode);
  }

  @Put()
  async updatedFileNode (@Res() res: Response, @Body() updateFileNodeDTO: UpdateFileNodeDTO) {
    const updatedFileNode = await this.fileNodeService.updateFileNode(updateFileNodeDTO);

    res.status(HttpStatus.OK).json(updatedFileNode);
  }

  @Get(':id')
  async getExpandedFolder (@Res() res: Response, @Param() params) {
    const folder = await this.fileNodeService.getExpandedFolder(params.id);

    res.status(HttpStatus.OK).json(folder);
  }
}
