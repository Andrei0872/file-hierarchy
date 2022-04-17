export interface FileNode {
  id: string;
  children?: FileNode[];
  name: string;
  is_dir?: boolean;
}