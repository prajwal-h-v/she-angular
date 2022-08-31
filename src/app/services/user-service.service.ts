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
import { Accommodation } from '../models/accomodation';


@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpClient: HttpClient) {}




  loginUser(data: any): Observable<UserLogin> {
    console.log(data);
    let logindata = { userId: data.userId, password: data.password};
    return this.httpClient.post<UserLogin>(
      'http://localhost:9090/users/userLogin',
      logindata
    );
  }

  // register(userRegisterData: UserRegisterDetails) {
  //       console.log(userRegisterData);
  //   let data = JSON.stringify(userRegisterData);
  //   return this.httpClient.post<UserRegisterDetails>(
  //     'http://localhost:9090/users/signup',
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
      'http://localhost:9090/users/signup',
      regData
    );
  }



// ----------------------------old--------------------------------
//   loginUser(userLoginData: UserLogin): Observable<boolean> {
//     console.log(userLoginData);
//     return this.httpClient.post<boolean>(
//       'http://localhost:9090/users/userLogin',
//       userLoginData
//     );
//   }

//   registerUser(userRegisterData: UserRegisterDetails): Observable<boolean> {
//     return this.httpClient.post<boolean>(
//       'http://localhost:9090/users/signup',
//       userRegisterData
//     );
//   }
// ---------------------------------------------------------------------------

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
    console.log(familyMember);
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


  // step dashboard
  getCourseDetails(userId:number): Observable<Course[]> {
    return this.httpClient.get<Course[]>(
      'http://localhost:9090/users/list-course-by-user/'+ userId
    );
  }

  getAccomDetails(userId:number): Observable<Accommodation[]> {
    return this.httpClient.get<Accommodation[]>(
      'http://localhost:9090/users/list-accommodation-by-user/'+ userId
    );
  }

}
