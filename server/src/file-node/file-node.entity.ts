import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FileNode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  is_dir: boolean;

  @Column({ default: null })
  parent_folder_id: number;
}