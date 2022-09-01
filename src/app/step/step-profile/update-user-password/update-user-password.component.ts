import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route } from '@angular/router';
import { UpdatePasswordDetails } from 'src/app/model/UpdatePasswordDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.css'],
})
export class UpdateUserPasswordComponent implements OnInit {
  showRegisterPassword: boolean = false;
  showRegisterConfirmPassword: boolean = false;
  showOldPassword: boolean = false;
  updatePasswordDetails: UpdatePasswordDetails = new UpdatePasswordDetails();
  userEmail: string;
  newPassword: string;
  confirmNewPassword: string;
  constructor(
    private userService: UserService,

    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  toggleRegisterPasswordVisibility(): void {
    this.showRegisterPassword = !this.showRegisterPassword;
  }

  toggleRegisterConfirmPasswordVisibility(): void {
    this.showRegisterConfirmPassword = !this.showRegisterConfirmPassword;
  }

  toggleOldPasswordVisibility(): void {
    this.showOldPassword = !this.showOldPassword;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  changePassword(): void {
    if (
      this.newPassword == this.confirmNewPassword &&
      this.userEmail == this.userService.getLocalUserDetails().email
    ) {
      this.updatePasswordDetails.newPassword = this.newPassword;
      this.updatePasswordDetails.userId =
        this.userService.getLocalUserDetails().userId;
      this.userService
        .updateUserPassword(this.updatePasswordDetails)
        .subscribe((response) => {
          if (response) {
            this.openSnackBar('Password Reset Successfull', 'DISMISS');
            // this.route.navigate(['userLoginAndRegister']);
            // sessionStorage.removeItem('userDetails');
          }
        });
    } else {
      this.openSnackBar('Credentials Mismatch', 'Try Again');
    }
  }
}
