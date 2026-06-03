import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { About_UsComponent } from './About_Us.component';

describe('About_UsComponent', () => {
  let component: About_UsComponent;
  let fixture: ComponentFixture<About_UsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ About_UsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(About_UsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
