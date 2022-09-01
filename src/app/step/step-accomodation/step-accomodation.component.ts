import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hostel } from 'src/app/model/Hostel';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-step-accomodation',
  templateUrl: './step-accomodation.component.html',
  styleUrls: ['./step-accomodation.component.css'],
})
export class StepAccomodationComponent implements OnInit {
  // accomodation:Array<any>=[]

  user: UserProfileDetails;
  accomodations: Hostel[];
  //new added
  isReg = false;
  userHostel: Hostel;
  constructor(
    private accomodationservice: AccommodationService,
    private router: Router,
    private userService: UserService
  ) {
    this.accomodations = new Array<Hostel>();
  }

  ngOnInit(): void {
    this.user = this.userService.getLocalUserDetails();
    console.log(this.user);
    if (
      sessionStorage.getItem('userDetails') === null ||
      sessionStorage.getItem('userDetails') === undefined
    ) {
      this.router.navigate(['she/step-login']);
    }
    this.refreshCourses();
  }
  reg = true;
  register(accommodation: Hostel) {
    console.log(accommodation);

    this.accomodationservice
      .register(accommodation, this.user)
      .subscribe((a) => {
        this.refreshCourses();
      });
  }

  // check if user is alloted with hostel
  userHostelId = 0;
  isRegister() {
    console.log(this.userHostel);
    if (this.userHostel !== null || this.userHostel !== undefined) {
      this.userHostelId = this.userHostel.accommodationId;
      this.isReg = true;
    } else {
      this.userHostelId = -1;
      this.isReg = false;
    }
  }

  //refresh data from server
  refreshCourses() {
    console.log('refreshing...');
    this.userService.getAccomDetails(this.user.userId).subscribe((hos) => {
      console.log(hos);

      this.userHostel = hos;
      // this.userHostelId = this.userHostel.accommodationId;
      // this.isReg = true;
      this.isRegister();
    });
    this.accomodations.splice(1);
    this.accomodationservice.getaccomodation().subscribe((accomodations) => {
      this.accomodations = accomodations;
      console.log(this.accomodations);
    });
  }

  vacate() {}
}
