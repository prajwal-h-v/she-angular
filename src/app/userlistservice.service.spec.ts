import { TestBed } from '@angular/core/testing';

import { UserlistserviceService } from './userlistservice.service';

describe('UserlistserviceService', () => {
  let service: UserlistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
