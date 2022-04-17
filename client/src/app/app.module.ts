import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileHierarchyModule } from './file-hierarchy/file-hierarchy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileHierarchyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
