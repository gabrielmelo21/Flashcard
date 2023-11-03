import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionGeneratorComponent } from './expression-generator.component';

describe('ExpressionGeneratorComponent', () => {
  let component: ExpressionGeneratorComponent;
  let fixture: ComponentFixture<ExpressionGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpressionGeneratorComponent]
    });
    fixture = TestBed.createComponent(ExpressionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
