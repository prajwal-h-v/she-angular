import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {


data:Array<any>=[]

getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>("http://localhost:9090/course/list-course");

}
  

  courses:Course[] =[];
  constructor(private httpClient:HttpClient) { this.data.forEach(element => {
    let course :Course = new Course();
    course.title= element.title;
    course.tags= [element.category];
    course.description= element.description;
    course.courseMode= element.mode[0];
    
  }); }

  enrollForCourse(userId:number, courseId: number):Observable<Enrollment>{
    console.log(courseId, userId);
    return this.httpClient.get<Enrollment>(`http://localhost:9090/course/${courseId}/enroll/${userId}`);
  }
  
}
