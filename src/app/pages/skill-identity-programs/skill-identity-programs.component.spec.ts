import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIdentityProgramsComponent } from './skill-identity-programs.component';

describe('SkillIdentityProgramsComponent', () => {
  let component: SkillIdentityProgramsComponent;
  let fixture: ComponentFixture<SkillIdentityProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillIdentityProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillIdentityProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
