import { TestBed } from '@angular/core/testing';

import { UploadcarService } from './uploadcar.service';

describe('UploadcarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadcarService = TestBed.get(UploadcarService);
    expect(service).toBeTruthy();
  });
});
