import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SukanyaRegister } from 'src/app/model/SukanyaRegister';
import { SukanyaService } from 'src/app/services/sukanya.service';

@Component({
  selector: 'app-step-register',
  templateUrl: './step-register.component.html',
  styleUrls: ['./step-register.component.css'],
})
export class StepRegisterComponent implements OnInit {
  sukanyaRegForm: FormGroup;
  minDate = new Date();
  errorMessage = '';
  isErr = false;
  showMsg: Boolean = false;
  sukanyaDoc: any = File;
  constructor(private sukanyaService: SukanyaService) {
    this.sukanyaRegForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      aadharNo: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.minDate.setFullYear(this.minDate.getFullYear() - 10);
  }

  fileUplaod(event: any) {
    this.sukanyaDoc = event.target.files[0];
  }

  register() {
    let registerData = this.sukanyaRegForm.getRawValue();

    if (registerData.firstName === undefined || registerData.firstName === '') {
      this.errorMessage = 'Please Enter First Name';
      this.isErr = true;
      setTimeout(() => {
        this.errorMessage = '';
        this.isErr = false;
      }, 3000);
      return;
    }
    if (registerData.lastName === undefined || registerData.lastName === '') {
      this.isErr = true;
      this.errorMessage = 'Please Enter Last Name';
      setTimeout(() => {
        this.errorMessage = '';
        this.isErr = false;
      }, 3000);
      return;
    }
    if (registerData.dob === undefined || registerData.dob === '') {
      this.errorMessage = 'Please Enter Date of Birth';
      this.isErr = true;
      setTimeout(() => {
        this.errorMessage = '';
        this.isErr = false;
      }, 3000);
      return;
    }
    if (
      registerData.aadharNo === undefined ||
      registerData.aadharNo === '' ||
      registerData.aadharNo.length < 12
    ) {
      this.errorMessage = 'Please Enter Valid Aadhar Number';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
      return;
    }
    // console.log(registerData.dob.substring(0,4));
    // console.log(this.minDate.getFullYear());
    if (registerData.dob.substring(0, 4) < this.minDate.getFullYear()) {
      this.errorMessage = 'Child should be below 10 years';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
      return;
    }
    // if(this.sukanyaReg.aadharDoc===undefined){
    //   this.errorMessage="Please Uplaod Aadhar";
    //   return ;
    // }
    this.sukanyaService.register(registerData).subscribe((_msg) => {
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
      }, 3000);
    });
    this.sukanyaRegForm.reset();
  }
}
