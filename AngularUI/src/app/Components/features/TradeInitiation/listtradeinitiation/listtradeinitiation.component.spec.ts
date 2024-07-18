import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtradeinitiationComponent } from './listtradeinitiation.component';

describe('ListtradeinitiationComponent', () => {
  let component: ListtradeinitiationComponent;
  let fixture: ComponentFixture<ListtradeinitiationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListtradeinitiationComponent]
    });
    fixture = TestBed.createComponent(ListtradeinitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
