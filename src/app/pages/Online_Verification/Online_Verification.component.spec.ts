import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Online_VerificationComponent } from './Online_Verification.component';

describe('Online_VerificationComponent', () => {
  let component: Online_VerificationComponent;
  let fixture: ComponentFixture<Online_VerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Online_VerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Online_VerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
