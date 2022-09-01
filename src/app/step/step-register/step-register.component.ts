import { Component, OnInit } from '@angular/core';
import { SukanyaRegister } from 'src/app/model/SukanyaRegister';
import { SukanyaService } from 'src/app/services/sukanya.service';

@Component({
  selector: 'app-step-register',
  templateUrl: './step-register.component.html',
  styleUrls: ['./step-register.component.css'],
})
export class StepRegisterComponent implements OnInit {
  sukanyaReg: SukanyaRegister = new SukanyaRegister();
  maxDate = new Date();
  minDate = new Date();
  errorMessage = '';
  showMsg: Boolean = false;
  sukanyaDoc: any = File;
  age: any;
  currentDate = new Date();
  constructor(private sukanyaService: SukanyaService) {}

  ngOnInit(): void {
    this.minDate.setFullYear(this.minDate.getFullYear() - 10);
  }

  fileUplaod(event: any) {
    this.sukanyaDoc = event.target.files[0];
  }

  register() {
    if (
      this.sukanyaReg.firstName === undefined ||
      this.sukanyaReg.firstName === ''
    ) {
      this.errorMessage = 'Please Enter First Name';
      return;
    }
    if (
      this.sukanyaReg.lastName === undefined ||
      this.sukanyaReg.lastName === ''
    ) {
      this.errorMessage = 'Please Enter Last Name';
      return;
    }
    if (this.sukanyaReg.dateOfBirth === undefined) {
      this.errorMessage =
        'Please Enter Date of Birth and age should be greater than 10';
      return;
    }
    if (
      this.sukanyaReg.aadharNumber === undefined ||
      this.sukanyaReg.aadharNumber === '' ||
      this.sukanyaReg.aadharNumber.length < 12
    ) {
      this.errorMessage = 'Please Enter Valid Aadhar Number';
      return;
    }
    // if(this.sukanyaReg.aadharDoc===undefined){
    //   this.errorMessage="Please Uplaod Aadhar";
    //   return ;
    // }
    this.sukanyaService.register(this.sukanyaReg).subscribe((_msg) => {
      this.showMsg = true;
    });
  }
}
