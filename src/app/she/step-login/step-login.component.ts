import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { STEP } from 'src/app/models/STEP';
import { StepAuthService } from 'src/app/services/step-auth.service';
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
  step_members: Array<STEP>;
  constructor(private stepAuth: StepAuthService, private router: Router) { 
    this.stepLoginForm = new FormGroup({
      stepId: new FormControl('', Validators.required),
      stepPwd: new FormControl('', Validators.required)
    });

    this.step_members = new Array<STEP>();
    

    this.stepRegForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      disabled: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      aadharNo: new FormControl('', Validators.required),
      panNo: new FormControl('', Validators.required),
      jobstatus: new FormControl('', Validators.required),
      jobtitle: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      residence: new FormControl('', Validators.required),
      maritalstatus: new FormControl('', Validators.required),
      stepPwd: new FormControl('', Validators.required),
      stepConPwd: new FormControl('', Validators.required),
    });
  }

  requestLoginStep(){
    let loginData = this.stepLoginForm.getRawValue();

    this.stepAuth.login(loginData).subscribe((data: STEP) => {
      // console.log(JSON.stringify(data));
      if (data !== null) {
        //sessionStorage.setItem('activeNgo', JSON.stringify(data));
        this.router.navigate(['/step/step-home']);
        this.isError = false;
      } else {
        this.isError = true;
        this.errorMessage = 'Invalid Credentials.!';
      }
    });
  }

  requestRegisterStep(){
    let registerData = this.stepRegForm.getRawValue();
    if (registerData.stepPwd !== registerData.stepConPwd) {
      this.isError = true;
      this.errorMessage = 'Password do not match';
      return;
    }
    this.isError = false;
    this.stepAuth.register(registerData).subscribe((data) => {
      console.log(data);
      this.stepRegForm.reset();
    });
  }

  ngOnInit(): void { 
  }
  isLogin:boolean=true;
  toggle(val: boolean){
    this.isLogin=val;
  }
 
}
