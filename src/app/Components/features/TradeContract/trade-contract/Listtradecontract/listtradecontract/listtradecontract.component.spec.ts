import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtradecontractComponent } from './listtradecontract.component';

describe('ListtradecontractComponent', () => {
  let component: ListtradecontractComponent;
  let fixture: ComponentFixture<ListtradecontractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListtradecontractComponent]
    });
    fixture = TestBed.createComponent(ListtradecontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
