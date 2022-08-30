import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Course } from '../../models/course';
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

snackBar: any;


constructor(private userService:UserServiceService, private router:Router) {


 }

  ngOnInit(): void {
    this.userService.getCourseDetails(10001).subscribe(courses=>{
      this.courses=courses;
      console.log(this.courses);
     });
  }

}
