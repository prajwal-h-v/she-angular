import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  emailId: string;
  password: string;

  constructor() {
    this.emailId="";
    this.password="";
  }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.emailId == "admin@gmail.com" && this.password == "123#321@"){
      console.log("Welcome to Dashboard");    
    }
    else{
      console.log("Wrong Credentials");
      
    }
  }

}
