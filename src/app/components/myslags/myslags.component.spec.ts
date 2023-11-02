import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyslagsComponent } from './myslags.component';

describe('MyslagsComponent', () => {
  let component: MyslagsComponent;
  let fixture: ComponentFixture<MyslagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyslagsComponent]
    });
    fixture = TestBed.createComponent(MyslagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
