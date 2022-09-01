import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLogin } from 'src/app/model/UserLogin';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css'],
})
export class UpdateUserDetailsComponent implements OnInit {
  showRegisterPassword: boolean = false;
  showRegisterConfirmPassword: boolean = false;
  userDetails: UserProfileDetails = new UserProfileDetails();
  // isValidUser: boolean = false;
  isValidUser: UserLogin;
  userLoginDetails: UserLogin = new UserLogin();
  password: string;

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userDetails = this.userService.getLocalUserDetails();
  }
  toggleRegisterPasswordVisibility(): void {
    this.showRegisterPassword = !this.showRegisterPassword;
  }
  toggleRegisterConfirmPasswordVisibility(): void {
    this.showRegisterConfirmPassword = !this.showRegisterConfirmPassword;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  updateUserProfileDetails(): void {
    this.openSnackBar(`Request Sent`, 'DISMISS');
    this.userLoginDetails.userId = this.userDetails.userId;
    this.userService
      .loginUser(this.userLoginDetails)
      .subscribe((response: any) => {
        this.isValidUser = response;
        console.log(this.isValidUser);
        // modified !=null
        if (this.isValidUser != null) {
          console.log(this.isValidUser);
          this.userService
            .updateUserDetails(this.userDetails)
            .subscribe((response: any) => {
              this.userDetails = response;
              sessionStorage.setItem('userDetails', JSON.stringify(response));
              window.location.reload();
            });
        } else {
          this.openSnackBar(`Error`, 'Try Again');
        }
      });
    this.openSnackBar(`Update Successfull`, 'DISMISS');
  }
}
