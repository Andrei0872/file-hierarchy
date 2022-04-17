import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { FileHierarchyService } from '../file-hierarchy.service';
import { FileNode } from './file-node/file-node.model';

@Component({
  selector: 'app-file-hierarchy',
  templateUrl: './file-hierarchy.component.html',
  styleUrls: ['./file-hierarchy.component.scss']
})
export class FileHierarchyComponent implements OnInit {
  rootFolders$: Observable<FileNode[]> = this.fileHierarchyService.rootFolders$;

  constructor (private fileHierarchyService: FileHierarchyService) { }

  ngOnInit(): void {
    this.fileHierarchyService.getRootFolders();
  }

  addRootFolder ({ name }: { name: string }) {
    this.fileHierarchyService.addRootFolder({
      name,
      is_dir: true
    });
  }
}
