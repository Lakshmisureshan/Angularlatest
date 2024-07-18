import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewrequirementComponent } from './list-newrequirement.component';

describe('ListNewrequirementComponent', () => {
  let component: ListNewrequirementComponent;
  let fixture: ComponentFixture<ListNewrequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNewrequirementComponent]
    });
    fixture = TestBed.createComponent(ListNewrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
