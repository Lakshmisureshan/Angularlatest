import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeContractComponent } from './trade-contract.component';

describe('TradeContractComponent', () => {
  let component: TradeContractComponent;
  let fixture: ComponentFixture<TradeContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeContractComponent]
    });
    fixture = TestBed.createComponent(TradeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
