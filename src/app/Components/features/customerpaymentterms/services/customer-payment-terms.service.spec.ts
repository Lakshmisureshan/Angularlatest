import { TestBed } from '@angular/core/testing';

import { CustomerPaymentTermsService } from './customer-payment-terms.service';

describe('CustomerPaymentTermsService', () => {
  let service: CustomerPaymentTermsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerPaymentTermsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
