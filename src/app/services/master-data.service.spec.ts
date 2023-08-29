import { TestBed } from '@angular/core/testing';

import { MasterDataService } from './master-data.service';

describe('MasterServiceService', () => {
  let service: MasterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
