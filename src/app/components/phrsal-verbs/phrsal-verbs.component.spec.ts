import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrsalVerbsComponent } from './phrsal-verbs.component';

describe('PhrsalVerbsComponent', () => {
  let component: PhrsalVerbsComponent;
  let fixture: ComponentFixture<PhrsalVerbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhrsalVerbsComponent]
    });
    fixture = TestBed.createComponent(PhrsalVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
