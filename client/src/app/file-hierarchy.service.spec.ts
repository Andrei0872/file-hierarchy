import { TestBed } from '@angular/core/testing';

import { FileHierarchyService } from './file-hierarchy.service';

describe('FileHierarchyService', () => {
  let service: FileHierarchyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileHierarchyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
