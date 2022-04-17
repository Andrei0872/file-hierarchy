import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, shareReplay } from 'rxjs';
import { FileNode } from './file-hierarchy/file-node/file-node.model';

const folders: FileNode[] = [
  { id: '1', name: 'p1',children: [ {name: 'p1.c1', id: 'p1.c1'}, {  name: 'p1.c2', id: 'p1.c2'} ] },
  { id: '2', name: 'p2' },
  { id: '3', name: 'p3' },
];

// TODO: add to config
const BASE_URL = 'http://localhost:3000/file-node';

@Injectable({
  providedIn: 'root'
})
export class FileHierarchyService {
  private rootFolders = new BehaviorSubject<FileNode[]>([]);
  rootFolders$ = this.rootFolders.asObservable()

  constructor(private httpClient: HttpClient) { }

  getRootFolders () {
    this.httpClient.get(`${BASE_URL}/roots`)
      .subscribe((rootFolders: any) => this.rootFolders.next(rootFolders));
  }

  addFileNodeInDirectory (data: any): Observable<FileNode> {
    return this.httpClient.post(`${BASE_URL}/child`, {
      ...data
    }) as Observable<FileNode>;
  }

  addRootFolder (data: any) {
    this.httpClient.post(`${BASE_URL}`, data)
      .subscribe((newRootFolder: any) => this.rootFolders.next([...this.rootFolders.value, newRootFolder]));
  }

  editFileNode (data: any): Observable<FileNode> {
    return this.httpClient.put(`${BASE_URL}`, data) as Observable<FileNode>;
  }
  
  expandFolder (id: any): Observable<FileNode> {
    return this.httpClient.get(`${BASE_URL}/${id}`) as Observable<FileNode>;
  }
}
