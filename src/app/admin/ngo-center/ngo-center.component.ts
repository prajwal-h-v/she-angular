import { Component, OnInit } from '@angular/core';

import { Course } from 'src/app/model/Course';
import { Hostel } from 'src/app/model/Hostel';

import { Ngo } from 'src/app/model/Ngo';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ngo-center',
  templateUrl: './ngo-center.component.html',
  styleUrls: ['./ngo-center.component.css'],
})
export class NgoCenterComponent implements OnInit {
  isError = false;
  erMsg = '';
  constructor(private adminService: AdminService) {
    this.ngoList = new Array<Ngo>();
    this.courseList = new Array<Course>();
    this.hostelList = new Array<Hostel>();
  }

  ngoList: Ngo[];
  courseList: Course[];
  hostelList: Hostel[];

  ngOnInit(): void {
    this.refreshLists();
  }

  refreshLists() {
    this.ngoList.splice(1);
    this.adminService.getPendingNgo().subscribe((ngos) => {
      this.ngoList = ngos;
    });

    this.courseList.splice(1);
    this.adminService.getPendingCourses().subscribe((courses) => {
      this.courseList = courses;
    });

    this.hostelList.splice(1);
    this.adminService.getPendingHostels().subscribe((hostels) => {
      this.hostelList = hostels;
    });
  }

  acceptNgo(ngo: Ngo) {
    console.log('Accepting ' + ngo.ngoId);
    this.adminService.acceptNgo(ngo).subscribe(
      (data) => {
        console.log(data);
        this.refreshLists();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rejectNgo(ngo: Ngo) {
    console.log('Rejecting ' + ngo.ngoId);
    this.adminService.rejectNgo(ngo).subscribe(
      (data) => {
        console.log(data);
        if (data !== null) {
          this.refreshLists();
        } else {
          this.isError = true;
          this.erMsg = 'Could not complete operation. Please Try Again later.';
          setTimeout(() => {
            this.isError = false;
            this.erMsg = '';
          }, 3000);
        }
      },
      (error) => {
        console.log(error);
        this.isError = true;
        this.erMsg = 'Could not complete operation. Please Try Again later.';
        setTimeout(() => {
          this.isError = false;
          this.erMsg = '';
        }, 3000);
      }
    );
  }

  acceptCourse(course: Course) {
    console.log(course.courseID);

    this.adminService.acceptCourse(course).subscribe(
      (course) => {
        if (course !== null) {
          this.refreshLists();
        } else {
          this.isError = true;
          this.erMsg = 'Could not complete Operation';
          setTimeout(() => {
            this.isError = false;
            this.erMsg = '';
          }, 3000);
        }
      },
      (error) => {
        console.log(error);
        this.isError = true;
        this.erMsg = 'Server Unreachable. Try Again Later';
        setTimeout(() => {
          this.isError = false;
          this.erMsg = '';
        }, 3000);
      }
    );
  }
  rejectCourse(course: Course) {
    this.adminService.rejectCourse(course).subscribe(
      (course) => {
        if (course !== null) {
          this.refreshLists();
        } else {
          this.isError = true;
          this.erMsg = 'Could not complete operation. Please Try Again later.';
          setTimeout(() => {
            this.isError = false;
            this.erMsg = '';
          }, 3000);
        }
      },
      (error) => {
        console.log(error);
        this.isError = true;
        this.erMsg = 'Could not complete operation. Please Try Again later.';
        setTimeout(() => {
          this.isError = false;
          this.erMsg = '';
        }, 3000);
      }
    );
  }

  acceptHostel(hostel: Hostel) {
    this.adminService.acceptHostel(hostel).subscribe(
      (hostel) => {
        if (hostel !== null) {
          this.refreshLists();
        } else {
          this.isError = true;
          this.erMsg = 'Could not complete operation. Please Try Again later.';
          setTimeout(() => {
            this.isError = false;
            this.erMsg = '';
          }, 3000);
        }
      },
      (error) => {
        console.log(error);
        this.isError = true;
        this.erMsg = 'Could not complete operation. Please Try Again later.';
        setTimeout(() => {
          this.isError = false;
          this.erMsg = '';
        }, 3000);
      }
    );
  }
  rejectHostel(hostel: Hostel) {
    this.adminService.rejectHostel(hostel).subscribe(
      (hostel) => {
        if (hostel !== null) {
          this.refreshLists();
        } else {
          this.isError = true;
          this.erMsg = 'Could not complete operation. Please Try Again later.';
          setTimeout(() => {
            this.isError = false;
            this.erMsg = '';
          }, 3000);
        }
      },
      (error) => {
        console.log(error);
        this.isError = true;
        this.erMsg = 'Could not complete operation. Please Try Again later.';
        setTimeout(() => {
          this.isError = false;
          this.erMsg = '';
        }, 3000);
      }
    );
  }
}
