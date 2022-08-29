import { Component, OnInit } from '@angular/core';  
import { SukanyaRegister } from '../../../models/sukanya-register'; 
import { SukanyaService } from 'src/app/services/sukanya.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  sukanyaReg:SukanyaRegister=new SukanyaRegister(); 
  maxDate = new Date();
  minDate=new Date();
  errorMessage="";
  showMsg: Boolean=false; 
  sukanyaDoc: any = File;
  constructor(private sukanyaService:SukanyaService) { 
 
  }

  ngOnInit(): void {
    this.minDate.setFullYear(this.minDate.getFullYear() - 10);
  }

  fileUplaod(event: any){
    this.sukanyaDoc = event.target.files[0]; 
  }

  register(){
    if(this.sukanyaReg.firstName===undefined || this.sukanyaReg.firstName===""){
      this.errorMessage="Please Enter First Name";
      return ;
    }if(this.sukanyaReg.lastName===undefined || this.sukanyaReg.lastName===""){
      this.errorMessage="Please Enter Last Name";
      return ;
    }
    if(this.sukanyaReg.dob===undefined){
      this.errorMessage="Please Date of Birth";
      return ;
    }
    if(this.sukanyaReg.aadharNo===undefined || this.sukanyaReg.aadharNo==="" ||this.sukanyaReg.aadharNo.length<12){
      this.errorMessage="Please Enter Valid Aadhar Number";
      return ;
    } 
    // if(this.sukanyaReg.aadharDoc===undefined){
    //   this.errorMessage="Please Uplaod Aadhar";
    //   return ;
    // }
    this.sukanyaService.register(this.sukanyaReg).subscribe(_msg=>{this.showMsg=true;})
  }
  
}
