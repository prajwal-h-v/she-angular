import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/Course';

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
}
