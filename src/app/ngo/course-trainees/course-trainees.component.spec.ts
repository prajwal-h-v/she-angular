import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTraineesComponent } from './course-trainees.component';

describe('CourseTraineesComponent', () => {
  let component: CourseTraineesComponent;
  let fixture: ComponentFixture<CourseTraineesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTraineesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
