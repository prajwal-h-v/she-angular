import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/Course';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { Enrollment } from 'src/app/model/Enrollment';

@Component({
  selector: 'app-step-courses',
  templateUrl: './step-courses.component.html',
  styleUrls: ['./step-courses.component.css'],
})
export class StepCoursesComponent implements OnInit {
  courses: Course[];
  user: UserProfileDetails;
  userCourses: Course[] = new Array<Course>();
  snackBar: any;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private userService: UserService
  ) {
    this.courses = new Array<Course>();
  }

  ngOnInit(): void {
    this.user = this.userService.getLocalUserDetails();
    if (this.user === null || this.user === undefined) {
      this.router.navigate(['she/step-login']);
    }
    this.refreshCourses();
  }

  refreshCourses() {
    this.userCourses.splice(1);
    this.userService
      .getCourseDetails(this.user.userId)
      .subscribe((ucourses) => {
        this.userCourses = ucourses;
        console.log(this.userCourses);
      });

    this.courses.splice(1);
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  register(courseId: number) {
    console.log(this.user);
    this.courseService
      .enrollForCourse(this.user.userId, courseId)
      .subscribe((enrollment) => {
        // this.snackBar.open('Successfully Enrolled', 'action');
        this.refreshCourses();
      });
  }

  isEnroll(course: Course) {
    return (
      this.userCourses.filter((e) => e.courseID === course.courseID).length > 0
    );
  }
}
