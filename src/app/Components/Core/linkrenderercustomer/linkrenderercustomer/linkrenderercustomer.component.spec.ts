import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkrenderercustomerComponent } from './linkrenderercustomer.component';

describe('LinkrenderercustomerComponent', () => {
  let component: LinkrenderercustomerComponent;
  let fixture: ComponentFixture<LinkrenderercustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkrenderercustomerComponent]
    });
    fixture = TestBed.createComponent(LinkrenderercustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
