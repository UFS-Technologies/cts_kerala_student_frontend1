import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCompetencyProgramsComponent } from './trade-competency-programs.component';

describe('TradeCompetencyProgramsComponent', () => {
  let component: TradeCompetencyProgramsComponent;
  let fixture: ComponentFixture<TradeCompetencyProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeCompetencyProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeCompetencyProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
