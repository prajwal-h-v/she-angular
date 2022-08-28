import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileDetails } from '../../models/user-profile-details';


@Component({
  selector: 'app-step-profile',
  templateUrl: './step-profile.component.html',
  styleUrls: ['./step-profile.component.css']
})
export class StepProfileComponent implements OnInit {
  dashboardState: string = 'profile';
  profileState: string = 'details';
  // userDetails: UserProfileDetails;
  constructor(private route: Router) {}

  ngOnInit(): void {
    // this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  }

  

  toUpdateDetails(): void {
    this.profileState = 'details';
  }

  toChangePassword(): void {
    this.profileState = 'password';
  }

  toFamilyDetails(): void {
    this.profileState = 'family';
  }

  // logoutUser(): void {
  //   this.route.navigate(['userLoginAndRegister']);
  //   sessionStorage.removeItem('userDetails');
  // }

  
  
}