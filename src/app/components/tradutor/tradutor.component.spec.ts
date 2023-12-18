import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradutorComponent } from './tradutor.component';

describe('TradutorComponent', () => {
  let component: TradutorComponent;
  let fixture: ComponentFixture<TradutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradutorComponent]
    });
    fixture = TestBed.createComponent(TradutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
