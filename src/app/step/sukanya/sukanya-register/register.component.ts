import { Component, OnInit } from '@angular/core';   
import { SukanyaService } from 'src/app/services/sukanya.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  sukanyaRegForm: FormGroup; 
  minDate=new Date();
  errorMessage="";
  showMsg: Boolean=false; 
  sukanyaDoc: any = File;  
  constructor(private sukanyaService:SukanyaService) { 
 
    this.sukanyaRegForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      dob : new FormControl('', Validators.required),
      aadharNo : new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.minDate.setFullYear(this.minDate.getFullYear() - 10);
  }

  fileUplaod(event: any){
    this.sukanyaDoc = event.target.files[0]; 
  }

  register(){
 
    let registerData = this.sukanyaRegForm.getRawValue();
     
    if(registerData.firstName===undefined || registerData.firstName===""){
      this.errorMessage="Please Enter First Name";
      return ;
    }if(registerData.lastName===undefined || registerData.lastName===""){
      this.errorMessage="Please Enter Last Name";
      return ;
    }
    if(registerData.dob===undefined){
      this.errorMessage="Please Date of Birth";
      return ;
    }
    if(registerData.aadharNo===undefined || registerData.aadharNo==="" ||registerData.aadharNo.length<12){
      this.errorMessage="Please Enter Valid Aadhar Number";
      return ;
    }  
    // console.log(registerData.dob.substring(0,4));
    // console.log(this.minDate.getFullYear());
    if(registerData.dob.substring(0,4)<this.minDate.getFullYear()){

      this.errorMessage="Child should be below 10 years";
      return ;
    }
    // if(this.sukanyaReg.aadharDoc===undefined){
    //   this.errorMessage="Please Uplaod Aadhar";
    //   return ;
    // }
    this.sukanyaService.register(registerData).subscribe(_msg=>{this.showMsg=true;})
    this.sukanyaRegForm.reset();

  }
  
}
