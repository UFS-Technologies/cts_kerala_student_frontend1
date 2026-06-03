import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { candidateComponent } from './Candidate.component';

describe('ProfileComponent', () => {
  let component: candidateComponent;
  let fixture: ComponentFixture<candidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ candidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(candidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
