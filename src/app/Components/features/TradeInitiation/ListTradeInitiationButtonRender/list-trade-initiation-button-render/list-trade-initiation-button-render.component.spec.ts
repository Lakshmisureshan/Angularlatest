import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTradeInitiationButtonRenderComponent } from './list-trade-initiation-button-render.component';

describe('ListTradeInitiationButtonRenderComponent', () => {
  let component: ListTradeInitiationButtonRenderComponent;
  let fixture: ComponentFixture<ListTradeInitiationButtonRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTradeInitiationButtonRenderComponent]
    });
    fixture = TestBed.createComponent(ListTradeInitiationButtonRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
