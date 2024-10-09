import { TestBed } from '@angular/core/testing';

import { SumServiceService } from './sum-service.service';

describe('SumServiceService', () => {
  let service: SumServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
