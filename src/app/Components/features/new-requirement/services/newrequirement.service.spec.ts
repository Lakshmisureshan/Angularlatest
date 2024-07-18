import { TestBed } from '@angular/core/testing';

import { NewrequirementService } from './newrequirement.service';

describe('NewrequirementService', () => {
  let service: NewrequirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewrequirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
