import { TestBed } from '@angular/core/testing';

import { NgolistserviceService } from './ngolistservice.service';

describe('NgolistserviceService', () => {
  let service: NgolistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgolistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
