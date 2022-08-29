import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CourseServiceService } from '../../services/course-service.service';
import { Course } from '../../models/course';
// import { UserProfileDetails } from '../user-profile-details';

@Component({
  selector: 'app-step-courses',
  templateUrl: './step-courses.component.html',
  styleUrls: ['./step-courses.component.css']
})
export class StepCoursesComponent implements OnInit {

  courses:Course[];
  // user: UserProfileDetails;

//   courses =[
//     {
//      courseTitle:"Java",
//      mode:"online",
//      description:"dsdasdsad",
//      duration:5,
//      location:"Pune",
//      start_date:23052012,
//      vacany:10,
//      job_offered:"yes"
//    },
//    {
//      courseTitle:"Java",
//      mode:"offline",
//      description:"dsdasdsaddsfsdfdfsd", 
//      duration:3,
//      location:"Pune",
//      start_date:23052012,
//      vacancy:12
//    }
//  ];  

  constructor(private courseService:CourseServiceService, private router:Router) {
    this.courseService.getCourses().subscribe(courses=>{
      this.courses=courses;
      console.log(this.courses);
     });
   }

  ngOnInit(): void {
  }

}
