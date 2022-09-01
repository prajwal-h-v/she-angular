import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hostel } from 'src/app/model/Hostel';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-step-accomodation',
  templateUrl: './step-accomodation.component.html',
  styleUrls: ['./step-accomodation.component.css'],
})
export class StepAccomodationComponent implements OnInit {
  // accomodation:Array<any>=[]

  user: UserProfileDetails;
  accomodations: Hostel[];
  constructor(
    private accomodationservice: AccommodationService,
    private router: Router
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
  reg = true;
  register(accommodation: Hostel) {
    console.log(accommodation);

    this.accomodationservice
      .register(accommodation, this.user)
      .subscribe((a) => {});
  }
}
