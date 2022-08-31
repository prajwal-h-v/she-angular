import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { STEP } from 'src/app/models/STEP';

import {UserRegisterDetails} from '../../models/user-register-details';
import { UserLogin } from 'src/app/models/user-login';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-step-login',
  templateUrl: './step-login.component.html',
  styles: [
  ]
})
export class StepLoginComponent implements OnInit {

  stepLoginForm: FormGroup;
  stepRegForm: FormGroup;
  isError: boolean=false;
  errorMessage: String="Error in Login";
  step_members: Array<UserRegisterDetails>;


  constructor(  private userService: UserServiceService, private router: Router) { 

    this.stepLoginForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.step_members = new Array<UserRegisterDetails>();
    

    this.stepRegForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      disabled: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contactNo: new FormControl('', Validators.required),
      aadharNo: new FormControl('', Validators.required),
      panNo: new FormControl('', Validators.required),
      jobStatus: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      residenceArea: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      conPassword: new FormControl('', Validators.required),
    });
  }

  requestLoginStep(){
    let loginData = this.stepLoginForm.getRawValue();

    this.userService.loginUser(loginData).subscribe((data: UserLogin) => {
      // console.log(JSON.stringify(data));
      if (data !== null) {
        //sessionStorage.setItem('activeNgo', JSON.stringify(data));
        this.router.navigate(['/step/stepdashboard']);
        this.isError = false;
      } else {
        this.isError = true;
        this.errorMessage = 'Invalid Credentials.!';
      }
    });
  }
  isSuccess = false;
  successMsg = '';
  requestRegisterStep(){
    let registerData = this.stepRegForm.getRawValue();
    if (registerData.password !== registerData.conPassword) {
      this.isError = true;
      this.errorMessage = 'Password do not match';
      return;
    }
    this.isError = false;
    this.userService.register(registerData).subscribe((data) => {
      console.log(data);
      this.stepRegForm.reset();
      this.isSuccess = true;
        this.successMsg =
          'Registered succesfully. Please use ' +
          data.userId +
          ' and your password to login';
    });
  }

  ngOnInit(): void { 
  }
  
  isLogin:boolean=true;
  toggle(val: boolean){
    this.isLogin=val;
  }
 
}