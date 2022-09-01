import { Component, OnInit } from '@angular/core';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user-center',
  templateUrl: './admin-user-center.component.html',
  styleUrls: ['./admin-user-center.component.css'],
})
export class AdminUserCenterComponent implements OnInit {
  pUsers: UserProfileDetails[];
  constructor(
    private userService: UserService,
    private hostelService: AccommodationService
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList() {
    this.userService.getPendingUsers().subscribe((users) => {
      this.pUsers = users;
      console.log(this.pUsers);
    });
  }

  acceptUser(user: UserProfileDetails) {
    this.userService.acceptUser(user).subscribe((data) => {
      if (data) {
        this.refreshList();
      }
    });
  }
  deleteUser(user: UserProfileDetails) {
    this.userService.rejectUser(user).subscribe((data) => {
      if (data) {
        this.refreshList();
      }
    });
  }
}
