import { TestBed } from '@angular/core/testing';

import { UseradminService } from './useradmin.service';

describe('UseradminService', () => {
  let service: UseradminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseradminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
