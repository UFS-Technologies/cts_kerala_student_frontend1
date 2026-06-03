import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact_UsComponent } from './Contact_Us.component';

describe('Contact_UsComponent', () => {
  let component: Contact_UsComponent;
  let fixture: ComponentFixture<Contact_UsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contact_UsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact_UsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
