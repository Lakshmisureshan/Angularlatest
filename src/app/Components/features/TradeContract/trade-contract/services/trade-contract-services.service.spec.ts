import { TestBed } from '@angular/core/testing';

import { TradeContractServicesService } from './trade-contract-services.service';

describe('TradeContractServicesService', () => {
  let service: TradeContractServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeContractServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
