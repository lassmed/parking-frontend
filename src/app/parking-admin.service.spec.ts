import { TestBed } from '@angular/core/testing';

import { ParkingAdminService } from './parking-admin.service';

describe('ParkingAdminService', () => {
  let service: ParkingAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
