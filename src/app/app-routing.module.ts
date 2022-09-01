import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NgoCenterComponent } from './admin/ngo-center/ngo-center.component';

import { AddAccommodationComponent } from './ngo/add-accommodation/add-accommodation.component';
import { AddCourseComponent } from './ngo/add-course/add-course.component';

import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { NgoStatusComponent } from './ngo/status/status.component';
import { AdminLoginComponent } from './she/admin-login/admin-login.component';
import { HomeComponent } from './she/home/home.component';
import { NgoLoginComponent } from './she/ngo-login/ngo-login.component';
import { StepLoginComponent } from './she/step-login/step-login.component';
import { StepAccomodationComponent } from './step/step-accomodation/step-accomodation.component';
import { StepCoursesComponent } from './step/step-courses/step-courses.component';
import { StepDashboardComponent } from './step/step-dashboard/step-dashboard.component';
import { StepProfileComponent } from './step/step-profile/step-profile.component';
import { StepRegisterComponent } from './step/step-register/step-register.component';
import { StepSukanyaComponent } from './step/step-sukanya/step-sukanya.component';

const routes: Routes = [
  { path: '', redirectTo: 'she', pathMatch: 'full' },
  { path: 'she', component: HomeComponent },
  { path: 'she/ngo-login', component: NgoLoginComponent },
  { path: 'she/step-login', component: StepLoginComponent },
  { path: 'she/admin-login', component: AdminLoginComponent },
  { path: 'ngo/dashboard', component: DashboardComponent },
  { path: 'ngo/new-course', component: AddCourseComponent },
  { path: 'ngo/new-accommodation', component: AddAccommodationComponent },
  { path: 'ngo/status', component: NgoStatusComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/ngo-center', component: NgoCenterComponent },
  { path: 'step/stepdashboard', component: StepDashboardComponent },
  { path: 'step/step-courses', component: StepCoursesComponent },
  { path: 'step/step-accomodations', component: StepAccomodationComponent },
  { path: 'step/step-profile', component: StepProfileComponent },
  { path: 'step/step-sukanya', component: StepSukanyaComponent },
  { path: 'step/sukanya-register', component: StepRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
