import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New_Centre_RegistrationComponent } from './New_Centre_Registration.component';

describe('New_Centre_RegistrationComponent', () => {
  let component: New_Centre_RegistrationComponent;
  let fixture: ComponentFixture<New_Centre_RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New_Centre_RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New_Centre_RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
