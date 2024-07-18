import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredboxComponent } from './coloredbox.component';

describe('ColoredboxComponent', () => {
  let component: ColoredboxComponent;
  let fixture: ComponentFixture<ColoredboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoredboxComponent]
    });
    fixture = TestBed.createComponent(ColoredboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
