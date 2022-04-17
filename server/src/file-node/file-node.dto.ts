export class CreateFileNodeDTO {
  name: string;
  parent_folder_id: number;
  is_dir: boolean;
}

export class UpdateFileNodeDTO {
  name: string;
  id: number;
}