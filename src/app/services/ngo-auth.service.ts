import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';
import { Hostel } from '../model/Hostel';
import { Ngo } from '../model/Ngo';

@Injectable({
  providedIn: 'root',
})
export class NgoAuthService {
  constructor(private httpClient: HttpClient) {}

  login(data: any): Observable<Ngo> {
    console.log(data);
    let logindata = { id: data.ngoID, password: data.ngoPassword };
    return this.httpClient.post<Ngo>(
      'http://localhost:5001/ngo/login',
      logindata
    );
  }
  register(data: any) {
    let regData = {
      name: data.ngoName,
      email: data.ngoEmail,
      password: data.password,
      address: data.ngoLocation,
      description: data.ngoDescription,
      contact: data.ngoContact,
      isVerified: data.isVerified,
    };
    return this.httpClient.post<Ngo>(
      'http://localhost:5001/ngo/register',
      regData
    );
  }

  getLocalNgo(): Ngo {
    let a = sessionStorage.getItem('activeNgo');
    let ngo: Ngo = a !== null ? JSON.parse(a) : null;
    return ngo;
  }
  requestLogout() {
    sessionStorage.removeItem('activeNgo');
  }

  addCourse(course: Course) {
    console.log(course);

    return this.httpClient.post<Course>(
      'http://localhost:5001/course/add',
      course
    );
  }

  getNgoList() {
    return this.httpClient.get<Ngo[]>('http://localhost:5001/ngo/getAll');
  }

  getCourse(verified: boolean): Observable<Course[]> {
    return this.httpClient.get<Course[]>(
      'http://localhost:5001/course/list-course-by-ngo/' +
        this.getLocalNgo().ngoId +
        '/' +
        verified
    );
  }
  getCourseCount() {
    return this.httpClient.get<Course[]>(
      'http://localhost:5001/course/list-course-by-ngo/' +
        this.getLocalNgo().ngoId
    );
  }

  getHostelList(verified: boolean) {
    return this.httpClient.get<Hostel[]>(
      'http://localhost:5001/accommodation/get-accommodation-by-ngo/' +
        this.getLocalNgo().ngoId +
        '/' +
        verified
    );
  }

  addHostel(hostel: Hostel) {
    return this.httpClient.post<Hostel>(
      'http://localhost:5001/accommodation/add',
      hostel
    );
  }

  getPendingCourses() {
    return this.httpClient.get<Course[]>(
      'http://localhost:5001/course/list-course-by-ngo-pending/' +
        this.getLocalNgo().ngoId
    );
  }
  getpendingHostel() {
    return this.httpClient.get<Hostel[]>(
      'http://localhost:5001/accommodation/get-accommodation-by-ngo-pending/' +
        this.getLocalNgo().ngoId
    );
  }
}
