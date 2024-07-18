import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiontestComponent } from './actiontest.component';

describe('ActiontestComponent', () => {
  let component: ActiontestComponent;
  let fixture: ComponentFixture<ActiontestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiontestComponent]
    });
    fixture = TestBed.createComponent(ActiontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
