import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTradeInitiationComponent } from './create-trade-initiation.component';

describe('CreateTradeInitiationComponent', () => {
  let component: CreateTradeInitiationComponent;
  let fixture: ComponentFixture<CreateTradeInitiationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTradeInitiationComponent]
    });
    fixture = TestBed.createComponent(CreateTradeInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
