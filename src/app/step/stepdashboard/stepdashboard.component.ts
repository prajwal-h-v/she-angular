import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accommodation } from '../../models/accomodation';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Course } from '../../models/course';
import { UserLogin } from 'src/app/models/user-login';
@Component({
  selector: 'app-stepdashboard',
  templateUrl: './stepdashboard.component.html',
  styleUrls: ['./stepdashboard.component.css']
})
export class StepdashboardComponent implements OnInit {

  // name: string = '';
//   courses=[
//     {
//       title:"Java",
//       mode:"offline",
//       description:"dsdasdsaddsfsdfdfsd", 
//       duration:3,
//       location:"Pune",
//       start_date:23052012
//     },
//     {
//       title:"Python",
//       mode:"offline",
//       description:"dsdasdsaddsfsdfdfsd", 
//       duration:3,
//       location:"Pune",
//       start_date:23052012
//     }
//   ]

//   accomodations =[
//     {
//      name:"Sakhi",
//      addressLine1:"online",
//      addressLine2:"dsdasdsad",
//      city:5,
//      state:"Pune"
//    },
//    {
//     name:"Sakhi2",
//     addressLine1:"online",
//     addressLine2:"dsdasdsad",
//     city:5,
//     state:"Pune"
//   }
   
//  ];  
  
courses:Course[];
accomodations:Accommodation[];
snackBar: any;
userLoginDetails: UserLogin = new UserLogin();

constructor(private userService:UserServiceService, private router:Router) {


 }

  ngOnInit(): void {
    this.userLoginDetails= JSON.parse(sessionStorage.getItem('userDetails'));

    console.log(this.userLoginDetails);
    this.userService.getCourseDetails(this.userLoginDetails.userId).subscribe(courses=>{
      this.courses=courses;
      console.log(this.courses);
     });

     this.userService.getAccomDetails(this.userLoginDetails.userId).subscribe(accomodations=>{
       this.accomodations=accomodations;
      //  console.log(this.userLoginDetails.userId)
       console.log(this.accomodations);
     })
  }

}
