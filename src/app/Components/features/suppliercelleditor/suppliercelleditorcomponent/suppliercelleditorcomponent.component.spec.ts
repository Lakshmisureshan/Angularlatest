import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliercelleditorcomponentComponent } from './suppliercelleditorcomponent.component';

describe('SuppliercelleditorcomponentComponent', () => {
  let component: SuppliercelleditorcomponentComponent;
  let fixture: ComponentFixture<SuppliercelleditorcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliercelleditorcomponentComponent]
    });
    fixture = TestBed.createComponent(SuppliercelleditorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
