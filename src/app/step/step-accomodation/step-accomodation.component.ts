import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hostel } from 'src/app/model/Hostel';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { AccommodationService } from 'src/app/services/accommodation.service';
//new added
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
  userAccomodations:Hostel[]=new Array<Hostel>();

  constructor(
    private accomodationservice: AccommodationService,
    private router: Router,
    private userService: UserService
  ) {
    this.accomodationservice.getaccomodation().subscribe((accomodations) => {
      this.accomodations = accomodations;
      console.log(accomodations);
    });
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userDetails') as any);
    console.log(this.user);

    if (
      sessionStorage.getItem('userDetails') === null ||
      sessionStorage.getItem('userDetails') === undefined
    ) {
      this.router.navigate(['she/step-login']);
    }
  }

//new added
  refreshCourses() {
    this.userAccomodations.splice(1);
    this.userService
      .getAccomDetails(this.user.userId)
      .subscribe((uaccoms) => {
        this.userAccomodations = uaccoms;
        console.log(this.userAccomodations);
      });

    this.accomodations.splice(1);
    this.accomodationservice.getaccomodation().subscribe((accomodations) => {
      this.accomodations = accomodations;
      console.log(this.accomodations);
    });
  }

  isRegister(accomodation: Hostel) {
    return (
      this.userAccomodations.filter((e) => e.accommodationId === accomodation.accommodationId).length > 0
    );
  }
// ---------------------

  reg = true;
  register(accommodation: Hostel) {
    console.log(accommodation);

    this.accomodationservice
      .register(accommodation, this.user)
      .subscribe((a) => {

        this.refreshCourses();
      });
  }
}
