import { TestBed } from '@angular/core/testing';

import { TradeinitiationService } from './tradeinitiation.service';

describe('TradeinitiationService', () => {
  let service: TradeinitiationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeinitiationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
