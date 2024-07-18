import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncellrenderComponent } from './btncellrender.component';

describe('BtncellrenderComponent', () => {
  let component: BtncellrenderComponent;
  let fixture: ComponentFixture<BtncellrenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtncellrenderComponent]
    });
    fixture = TestBed.createComponent(BtncellrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
