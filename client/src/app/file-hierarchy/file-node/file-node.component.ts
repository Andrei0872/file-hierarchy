import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FileHierarchyService } from 'src/app/file-hierarchy.service';
import { FileNode } from './file-node.model';

@Component({
  selector: 'app-file-node',
  templateUrl: './file-node.component.html',
  styleUrls: ['./file-node.component.scss']
})
export class FileNodeComponent implements OnInit {
  @Input()
  fileNode!: FileNode;

  @Input()
  paddingFactor = .5;

  @Output()
  childEdited = new EventEmitter();

  @HostBinding('style.padding-left') get paddingLeft () {
    return `${this.paddingFactor * .4}rem`;
  }

  newFileNodeName: string = '';
  isCreatingFolder = false;
  isCreatingFile = false;
  currentlyEditedVal = '';

  get isCreating () {
    return this.isCreatingFolder || this.isCreatingFile;
  }

  get isEditing () {
    return this.currentlyEditedVal !== '';
  }

  constructor (private fileHierarchyService: FileHierarchyService) { }

  ngOnInit(): void {
  }

  onChildEdited () {
    this.fileNode.children?.sort((c1, c2) => c1.name.localeCompare(c2.name));

    this.fileNode = {
      ...this.fileNode,
      children: [...this.fileNode.children ?? []]
    };
  }

  addFile (fileName: string) {
    if (!this.newFileNodeName) {
      return;
    }

    const data = {
      name: fileName,
      parent_folder_id: this.fileNode.id,
      is_dir: false,
    }

    this.fileHierarchyService.addFileNodeInDirectory(data)
      .subscribe(newFileNode => {
        this.fileNode = newFileNode;
        this.resetCreatingFields();
      });
  }

  addFolder (folderName: string) {
    if (!this.newFileNodeName) {
      return;
    }

    const data = {
      name: folderName,
      parent_folder_id: this.fileNode.id,
      is_dir: true,
    }

    this.fileHierarchyService.addFileNodeInDirectory(data)
      .subscribe(newFileNode => {
        this.fileNode = newFileNode;
        this.resetCreatingFields();
      });
  }

  expandFolder (folderId: FileNode['id']) {
    this.fileHierarchyService.expandFolder(folderId)
      .subscribe(
        expandedFolder => this.fileNode = expandedFolder
      )
  }

  editFileNode (newName: string) {
    const data = {
      name: newName,
      id: this.fileNode.id
    };
    
    this.fileHierarchyService.editFileNode(data)
      .subscribe(updatedFileNode => {
        this.fileNode = updatedFileNode
        this.currentlyEditedVal = '';
        this.childEdited.emit();
      });
  }

  private resetCreatingFields () {
    this.newFileNodeName = '';
    this.isCreatingFile = this.isCreatingFolder = false;
  }
}
