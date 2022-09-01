import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/Course';
import { Hostel } from 'src/app/model/Hostel';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-step-dashboard',
  templateUrl: './step-dashboard.component.html',
  styleUrls: ['./step-dashboard.component.css'],
})
export class StepDashboardComponent implements OnInit {
  courses: Course[];
  accomodations: Hostel[];
  snackBar: any;
  userLoginDetails: UserProfileDetails;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userLoginDetails = this.userService.getLocalUserDetails();

    if (this.userLoginDetails === null || this.userLoginDetails === undefined) {
      this.router.navigate(['/she/step-login']);
    }

    console.log(this.userLoginDetails);
    this.userService
      .getCourseDetails(this.userLoginDetails.userId)
      .subscribe((courses) => {
        this.courses = courses;
        console.log(this.courses);
      });

    this.userService
      .getAccomDetails(this.userLoginDetails.userId)
      .subscribe((accomodations) => {
        this.accomodations = accomodations;
        //  console.log(this.userLoginDetails.userId)
        console.log(this.accomodations);
      });
  }
}
