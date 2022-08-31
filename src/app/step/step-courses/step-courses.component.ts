import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../../services/course-service.service';
import { Course } from '../../models/course';
import { UserProfileDetails } from '../../models/user-profile-details';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-step-courses',
  templateUrl: './step-courses.component.html',
  styleUrls: ['./step-courses.component.css']
})
export class StepCoursesComponent implements OnInit {

  courses:Course[];
  user: UserProfileDetails;
  snackBar: any;


  constructor(private courseService:CourseServiceService, private router:Router) {
    this.courseService.getCourses().subscribe(courses=>{
      this.courses=courses;
      console.log(this.courses);
     });
   }

   ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userDetails'));
    if(sessionStorage.getItem('userDetails')===null || sessionStorage.getItem('userDetails')===undefined){
      this.router.navigateByUrl('../../she/StepLogin');
    }
  }

  register(courseId: number){
    console.log(this.user);
    this.courseService.enrollForCourse(this.user.userId, courseId).subscribe(enrollment=>{
      this.snackBar.open("Successfully Enrolled","action");
    });
  }

}
