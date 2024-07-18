import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTradeInitiationComponent } from './edit-trade-initiation.component';

describe('EditTradeInitiationComponent', () => {
  let component: EditTradeInitiationComponent;
  let fixture: ComponentFixture<EditTradeInitiationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTradeInitiationComponent]
    });
    fixture = TestBed.createComponent(EditTradeInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
