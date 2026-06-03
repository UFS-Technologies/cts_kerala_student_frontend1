import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C_Tech_Skill_Training_CentresComponent } from './C_Tech_Skill_Training_Centres.component';

describe('C_Tech_Skill_Training_CentresComponent', () => {
  let component: C_Tech_Skill_Training_CentresComponent;
  let fixture: ComponentFixture<C_Tech_Skill_Training_CentresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C_Tech_Skill_Training_CentresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C_Tech_Skill_Training_CentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
