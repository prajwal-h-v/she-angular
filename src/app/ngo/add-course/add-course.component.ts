import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/entity/Course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courses: Course[] = new Array<Course>();
  course: Course = new Course();
  courseForm: FormGroup;
  constructor() {
    this.courseForm = new FormGroup({
      courseTitle: new FormControl('', Validators.required),
      courseDescription: new FormControl('', Validators.required),
      courseStart: new FormControl('', Validators.required),
      courseDuration: new FormControl('', Validators.required),
      courseJobs: new FormControl('', Validators.required),
      courseVacnacy: new FormControl(''),
      courseMode: new FormControl('', Validators.required),
      courseLocation: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  createCourse() {
    console.log(this.courseForm.getRawValue());
  }
}
