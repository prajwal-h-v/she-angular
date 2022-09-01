import { TestBed } from '@angular/core/testing';

import { NgoadminService } from './ngoadmin.service';

describe('NgoadminService', () => {
  let service: NgoadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
