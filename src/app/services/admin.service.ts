import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/Admin';
import { Course } from '../model/Course';
import { Hostel } from '../model/Hostel';
import { Ngo } from '../model/Ngo';
import { Statistics } from '../model/Statistics';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  requestLogin(data: Admin) {
    console.log(data);
    return this.http.post<Admin>('http://localhost:5001/admin/login', data);
  }

  getLocalAdmin(): Admin {
    let a = sessionStorage.getItem('admin');
    let admin: Admin = a !== null ? JSON.parse(a) : null;
    return admin;
  }
  requestLogout() {
    sessionStorage.removeItem('admin');
  }

  getPendingNgo() {
    return this.http.get<Ngo[]>('http://localhost:5001/admin/get-ngo-pending');
  }

  acceptNgo(ngo: Ngo) {
    return this.http.put<Ngo>(
      'http://localhost:5001/admin/accept-ngo',
      ngo.ngoId
    );
  }

  rejectNgo(ngo: Ngo) {
    return this.http.post<Ngo>(
      'http://localhost:5001/admin/delete-ngo',
      ngo.ngoId
    );
  }

  getPendingCourses() {
    return this.http.get<Course[]>(
      'http://localhost:5001/admin/get-pending-courses'
    );
  }
  acceptCourse(course: Course) {
    console.log(course);

    return this.http.put<Course>(
      'http://localhost:5001/admin/accept-course',
      course.courseID
    );
  }
  rejectCourse(course: Course) {
    return this.http.post<Course>(
      'http://localhost:5001/admin/delete-course',
      course.courseID
    );
  }
  getPendingHostels() {
    return this.http.get<Hostel[]>(
      'http://localhost:5001/admin/get-pending-hostels'
    );
  }
  acceptHostel(hostel: Hostel) {
    console.log(hostel);

    return this.http.put<Hostel>(
      'http://localhost:5001/admin/accept-hostel',
      hostel.accommodationId
    );
  }

  rejectHostel(hostel: Hostel) {
    return this.http.post<Hostel>(
      'http://localhost:5001/admin/delete-hostel',
      hostel.accommodationId
    );
  }

  getStatistics() {
    return this.http.get<Statistics>('http://localhost:5001/admin/statistics');
  }
}
