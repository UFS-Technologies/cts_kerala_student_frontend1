import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_LoginComponent } from './Student_Login.component';

describe('Student_LoginComponent', () => {
  let component: Student_LoginComponent;
  let fixture: ComponentFixture<Student_LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Student_LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
