import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { Enrollment } from '../model/Enrollment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Array<Course>;
  constructor(private httpClient: HttpClient) {
    this.courses = new Array<Course>();
  }

  getCourses(): Array<Course> {
    return this.courses;
  }

  removeCourse(pos: number) {
    this.courses.splice(pos, 1);
  }
  getAllCourses() {
    return this.httpClient.get<Course[]>(
      'http://localhost:5001/course/list-course'
    );
  }

  enrollForCourse(userId: number, courseId: number) {
    console.log(courseId, userId);
    return this.httpClient.get<Enrollment>(
      `http://localhost:5001/course/${courseId}/enroll/${userId}`
    );
  }
}
