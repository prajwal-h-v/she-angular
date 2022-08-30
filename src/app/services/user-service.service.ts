import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyMember } from '../models/family-member';
import { UpdatePasswordDetails } from '../models/update-password-details';
import { UserId } from '../models/user-id';
import { UserLogin } from '../models/user-login';
import { UserProfileDetails } from '../models/user-profile-details';
import { UserRegisterDetails } from '../models/user-register-details';
import {Course} from '../models/course';


@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpClient: HttpClient) {}

  loginUser(userLoginData: UserLogin): Observable<boolean> {
    console.log(userLoginData);
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/userLogin',
      userLoginData
    );
  }

  registerUser(userRegisterData: UserRegisterDetails): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/signup',
      userRegisterData
    );
  }

  getUserDetails(userId: UserId): Observable<UserProfileDetails> {
    return this.httpClient.post<UserProfileDetails>(
      'http://localhost:9090/users/userDetails',
      userId
    );
  }

  updateUserDetails(user: UserProfileDetails): Observable<UserProfileDetails> {
    console.log(user)
    return this.httpClient.post<UserProfileDetails>(
      'http://localhost:9090/users/updateProfile',
      user
    );
  }

  updateUserPassword(
    userPasswordDetails: UpdatePasswordDetails
  ): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/changePassword',
      userPasswordDetails
    );
  }

  resetPassword(userId: UserId): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/forgotPassword',
      userId
    );
  }

  addFamilyMember(familyMember: FamilyMember): Observable<FamilyMember> {
    return this.httpClient.post<FamilyMember>(
      'http://localhost:9090/users/addFamilyMember',
      familyMember
    );
  }

  getFamilyMembers(userId: UserId): Observable<FamilyMember[]> {
    return this.httpClient.post<FamilyMember[]>(
      'http://localhost:9090/users/getFamilyDetails',
      userId
    );
  }



  getCourseDetails(userId:number): Observable<Course[]> {
    return this.httpClient.get<Course[]>(
      'http:///localhost:9090/users/list-course-by-user/'+ userId
    );
  }

}
