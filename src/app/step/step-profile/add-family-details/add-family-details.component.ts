import { Component, OnInit } from '@angular/core';
import { FamilyMember } from 'src/app/model/FamilyMembers';
import { UserId } from 'src/app/model/UserId';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-family-details',
  templateUrl: './add-family-details.component.html',
  styleUrls: ['./add-family-details.component.css'],
})
export class AddFamilyDetailsComponent implements OnInit {
  relations = [
    { value: 'Father', viewValue: 'Father' },
    { value: 'Mother', viewValue: 'Mother' },
    { value: 'Daughter', viewValue: 'Daughter' },
    { value: 'Son', viewValue: 'Son' },
    { value: 'Husband', viewValue: 'Husband' },
    { value: 'Wife', viewValue: 'Wife' },
  ];

  familyState: string = 'addMember';
  familyMember: FamilyMember = new FamilyMember();
  userId: UserId = new UserId();
  familyMembers: FamilyMember[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userId.userId = this.userService.getLocalUserDetails().userId;
    this.getFamilyMembers();
  }

  toAddMember() {
    this.familyState = 'addMember';
    this.familyMember = new FamilyMember();
  }

  toUpdateMember(member: FamilyMember) {
    this.familyState = 'updateMember';
    this.familyMember = member;
  }

  addFamilyMember() {
    this.familyMember.userId = this.userId.userId;
    this.userService
      .addFamilyMember(this.familyMember)
      .subscribe((response: any) => {
        console.log(response);
        location.reload();
      });
  }

  getFamilyMembers() {
    this.userService
      .getFamilyMembers(this.userId)
      .subscribe((response: any) => {
        this.familyMembers = response;
        console.log(this.familyMembers);
      });
  }
}
