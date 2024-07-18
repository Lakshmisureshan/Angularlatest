import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrieghtChargeUpdateComponent } from './frieght-charge-update.component';

describe('FrieghtChargeUpdateComponent', () => {
  let component: FrieghtChargeUpdateComponent;
  let fixture: ComponentFixture<FrieghtChargeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrieghtChargeUpdateComponent]
    });
    fixture = TestBed.createComponent(FrieghtChargeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
