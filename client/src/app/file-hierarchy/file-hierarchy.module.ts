import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileNodeComponent } from './file-node/file-node.component';
import { FileHierarchyComponent } from './file-hierarchy.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FileNodeComponent, FileHierarchyComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [FileHierarchyComponent],
})
export class FileHierarchyModule { }
