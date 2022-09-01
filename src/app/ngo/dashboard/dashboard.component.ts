import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Course } from 'src/app/model/Course';
import { Hostel } from 'src/app/model/Hostel';
import { Ngo } from 'src/app/model/Ngo';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  hostels: Array<Hostel>;
  name: string = '';
  constructor(private router: Router, private ngoAuth: NgoAuthService) {
    this.ngo = new Ngo();
    this.courses = new Array<Course>();
    this.hostels = new Array();
  }
  courses: Array<Course>;
  ngo: Ngo;
  ngOnInit(): void {
    this.refreshCourses();
    this.refreshHostel();
    this.ngo = this.ngoAuth.getLocalNgo();
    if (this.ngo === null) this.router.navigate(['/she/ngo-login']);
    console.log(this.ngo);
    this.ngoAuth.getCourseCount().subscribe((d) => {
      this.cc = d.length;
    });
  }
  cc: any = 0;

  refreshCourses() {
    this.courses.splice(0);
    this.ngoAuth.getCourse(true).subscribe((courses) => {
      console.log(courses);

      for (let c of courses) {
        this.courses.push(c);
      }
    });
  }
  refreshHostel() {
    this.ngoAuth.getHostelList(true).subscribe((hostels) => {
      console.log(hostels);

      this.hostels = hostels;
    });
  }
}
