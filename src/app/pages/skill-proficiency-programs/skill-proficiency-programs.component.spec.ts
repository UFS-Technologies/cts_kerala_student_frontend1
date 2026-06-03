import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProficiencyProgramsComponent } from './skill-proficiency-programs.component';

describe('SkillProficiencyProgramsComponent', () => {
  let component: SkillProficiencyProgramsComponent;
  let fixture: ComponentFixture<SkillProficiencyProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillProficiencyProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillProficiencyProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
