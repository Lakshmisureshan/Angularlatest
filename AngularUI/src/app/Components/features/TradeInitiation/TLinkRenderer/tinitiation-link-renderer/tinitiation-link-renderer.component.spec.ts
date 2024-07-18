import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TInitiationLinkRendererComponent } from './tinitiation-link-renderer.component';

describe('TInitiationLinkRendererComponent', () => {
  let component: TInitiationLinkRendererComponent;
  let fixture: ComponentFixture<TInitiationLinkRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TInitiationLinkRendererComponent]
    });
    fixture = TestBed.createComponent(TInitiationLinkRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
