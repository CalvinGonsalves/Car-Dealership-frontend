import { TestBed } from '@angular/core/testing';

import { UpdatedetailsService } from './updatedetails.service';

describe('UpdatedetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatedetailsService = TestBed.get(UpdatedetailsService);
    expect(service).toBeTruthy();
  });
});
