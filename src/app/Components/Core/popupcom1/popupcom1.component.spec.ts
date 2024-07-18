import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popupcom1Component } from './popupcom1.component';

describe('Popupcom1Component', () => {
  let component: Popupcom1Component;
  let fixture: ComponentFixture<Popupcom1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Popupcom1Component]
    });
    fixture = TestBed.createComponent(Popupcom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
