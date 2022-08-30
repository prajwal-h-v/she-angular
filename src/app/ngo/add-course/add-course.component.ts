import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/Course';
import { Ngo } from 'src/app/model/Ngo';
import { CourseService } from 'src/app/services/course.service';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courses: Array<Course>;
  ngo: Ngo;
  courseForm: FormGroup;
  constructor(private ngoAuth: NgoAuthService, private router: Router) {
    this.courseForm = new FormGroup({
      courseTitle: new FormControl('', Validators.required),
      courseDescription: new FormControl('', Validators.required),
      courseStart: new FormControl('', Validators.required),
      courseDuration: new FormControl('', Validators.required),
      courseJobs: new FormControl('', Validators.required),
      courseLocation: new FormControl('', Validators.required),
    });

    this.ngo = new Ngo();
    this.courses = new Array<Course>();
  }

  ngOnInit(): void {
    this.ngo = this.ngoAuth.getLocalNgo();
    if (this.ngo === null) this.router.navigate(['/she/ngo-login']);
    this.refreshCourses();
  }

  refreshCourses() {
    this.courses.splice(0);
    this.ngoAuth.getCourse(this.ngo.ngoId).subscribe((courses) => {
      for (let c of courses) {
        this.courses.push(c);
      }
    });
  }

  createCourse() {
    let formValue = this.courseForm.getRawValue();

    let course: Course = new Course();
    course.title = formValue.courseTitle;
    course.description = formValue.courseDescription;
    course.startDate = formValue.courseStart;
    course.durationMonth = formValue.courseDuration;
    course.isJob = formValue.courseJobs;
    course.location = formValue.courseLocation;
    course.ngoId = this.ngo.ngoId;
    console.log(course);

    // this.courses.push(course);
    this.ngoAuth.addCourse(course).subscribe((data) => {
      console.log(data);
      this.refreshCourses();
      this.courseForm.reset();
    });
  }

  deleteCourse(pos: number) {}
}
