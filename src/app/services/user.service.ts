import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';
import { FamilyMember } from '../model/FamilyMembers';
import { Hostel } from '../model/Hostel';
import { UpdatePasswordDetails } from '../model/UpdatePasswordDetails';
import { UserId } from '../model/UserId';

import { UserLogin } from '../model/UserLogin';
import { UserProfileDetails } from '../model/UserProfileDetails';
import { UserRegisterDetails } from '../model/UserRegisterDetails';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  loginUser(data: any): Observable<UserProfileDetails> {
    console.log(data);
    let logindata = { userId: data.userId, password: data.password };
    return this.httpClient.post<UserProfileDetails>(
      'http://localhost:5001/users/userLogin',
      logindata
    );
  }

  setLocalUserDetails(userDetials: UserProfileDetails) {
    let user: UserId = new UserId();
    user.userId = userDetials.userId;

    this.httpClient
      .post<UserProfileDetails>('http://localhost:5001/users/userDetails', user)
      .subscribe((userProfile: UserProfileDetails) => {
        sessionStorage.setItem('userDetails', JSON.stringify(userProfile));
      });
  }
  getLocalUserDetails(): UserProfileDetails {
    return JSON.parse(sessionStorage.getItem('userDetails') as string);
  }

  // register(userRegisterData: UserRegisterDetails) {
  //       console.log(userRegisterData);
  //   let data = JSON.stringify(userRegisterData);
  //   return this.httpClient.post<UserRegisterDetails>(
  //     'http://localhost:5001/users/signup',
  //     data
  //   );
  // }
  register(data: any) {
    let regData = {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      gender: data.gender,
      disabled: data.disabled,
      dob: data.dob,
      email: data.email,
      contactNo: data.contactNo,
      aadharNo: data.aadharNo,
      panNo: data.panNo,
      jobStatus: data.jobStatus,
      jobTitle: data.jobTitle,
      salary: data.salary,
      residenceArea: data.residenceArea,
      maritalStatus: data.maritalStatus,
      password: data.password,
      conPassword: data.conPassword,
    };

    console.log(JSON.stringify(regData));
    return this.httpClient.post<UserRegisterDetails>(
      'http://localhost:5001/users/signup',
      regData
    );
  }

  // ----------------------------old--------------------------------
  //   loginUser(userLoginData: UserLogin): Observable<boolean> {
  //     console.log(userLoginData);
  //     return this.httpClient.post<boolean>(
  //       'http://localhost:5001/users/userLogin',
  //       userLoginData
  //     );
  //   }

  //   registerUser(userRegisterData: UserRegisterDetails): Observable<boolean> {
  //     return this.httpClient.post<boolean>(
  //       'http://localhost:5001/users/signup',
  //       userRegisterData
  //     );
  //   }
  // ---------------------------------------------------------------------------

  getUserDetails(userId: UserId): Observable<UserProfileDetails> {
    return this.httpClient.post<UserProfileDetails>(
      'http://localhost:5001/users/userDetails',
      userId
    );
  }

  updateUserDetails(user: UserProfileDetails): Observable<UserProfileDetails> {
    console.log(user);
    return this.httpClient.post<UserProfileDetails>(
      'http://localhost:5001/users/updateProfile',
      user
    );
  }

  updateUserPassword(
    userPasswordDetails: UpdatePasswordDetails
  ): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:5001/users/changePassword',
      userPasswordDetails
    );
  }

  resetPassword(userId: UserId): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:5001/users/forgotPassword',
      userId
    );
  }

  addFamilyMember(familyMember: FamilyMember): Observable<FamilyMember> {
    console.log(familyMember);
    return this.httpClient.post<FamilyMember>(
      'http://localhost:5001/users/addFamilyMember',
      familyMember
    );
  }

  getFamilyMembers(userId: UserId): Observable<FamilyMember[]> {
    return this.httpClient.post<FamilyMember[]>(
      'http://localhost:5001/users/getFamilyDetails',
      userId
    );
  }

  // step dashboard
  getCourseDetails(userId: number): Observable<Course[]> {
    console.log('Getting courses of ' + userId);

    return this.httpClient.get<Course[]>(
      'http://localhost:5001/users/list-course-by-user/' + userId
    );
  }

  getAccomDetails(userId: number): Observable<Hostel[]> {
    return this.httpClient.get<Hostel[]>(
      'http://localhost:5001/users/list-accommodation-by-user/' + userId
    );
  }
}
