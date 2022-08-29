import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './ngo/accommodation/accommodation.component';
import { AddAccommodationComponent } from './ngo/add-accommodation/add-accommodation.component';
import { AddCourseComponent } from './ngo/add-course/add-course.component';
import { CoursesComponent } from './ngo/courses/courses.component';
import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { AdminLoginComponent } from './she/admin-login/admin-login.component';
import { HomeComponent } from './she/home/home.component';
import { NgoLoginComponent } from './she/ngo-login/ngo-login.component';
import { StepLoginComponent } from './she/step-login/step-login.component';
import { StepHeaderComponent } from './step/step-header/step-header.component';
import { SukanyaHomeComponent } from './step/sukanya/sukanya-home/sukanya-home.component';
import { RegisterComponent } from './step/sukanya/sukanya-register/register.component'; 

const routes: Routes = [
  {path:"sukanyaHome", component: SukanyaHomeComponent},
  {path:"sukanyaRegister", component: RegisterComponent},
  { path: 'she', component: HomeComponent },
  { path: 'she/ngo-login', component: NgoLoginComponent },
  { path: 'she/step-login', component: StepLoginComponent },
  { path: 'she/admin-login', component: AdminLoginComponent },
  { path: 'step/step-header', component: StepHeaderComponent},
  { path: 'ngo/dashboard', component: DashboardComponent },
  { path: 'ngo/new-course', component: AddCourseComponent },
  { path: 'ngo/new-accommodation', component: AddAccommodationComponent },
  { path: 'ngo/courses', component: CoursesComponent },
  { path: 'ngo/accommodation', component: AccommodationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
