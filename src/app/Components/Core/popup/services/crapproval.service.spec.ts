import { TestBed } from '@angular/core/testing';

import { CrapprovalService } from './crapproval.service';

describe('CrapprovalService', () => {
  let service: CrapprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrapprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
