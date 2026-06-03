import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityProgramComponent } from './university-program.component';

describe('UniversityProgramComponent', () => {
  let component: UniversityProgramComponent;
  let fixture: ComponentFixture<UniversityProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
