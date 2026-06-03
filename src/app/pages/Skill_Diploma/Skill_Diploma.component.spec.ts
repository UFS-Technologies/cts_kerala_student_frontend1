import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skill_DiplomaComponent } from './Skill_Diploma.component';

describe('Skill_DiplomaComponent', () => {
  let component: Skill_DiplomaComponent;
  let fixture: ComponentFixture<Skill_DiplomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skill_DiplomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skill_DiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
