import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/Course';
import { UserProfileDetails } from 'src/app/model/UserProfileDetails';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-course-trainees',
  templateUrl: './course-trainees.component.html',
  styleUrls: ['./course-trainees.component.css'],
})
export class CourseTraineesComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private ngoAuth: NgoAuthService
  ) {}
  users: UserProfileDetails[];
  course: number;
  name: string;
  ngOnInit(): void {
    this.course = this.activatedRoute.snapshot.queryParams['course'];
    this.name = this.activatedRoute.snapshot.queryParams['name'];
    this.ngoAuth.getUsersForCourse(this.course).subscribe((data) => {
      this.users = data;
    });
  }
}
