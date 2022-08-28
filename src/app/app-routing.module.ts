import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AccommodationComponent } from './ngo/accommodation/accommodation.component';
// import { AddAccommodationComponent } from './ngo/add-accommodation/add-accommodation.component';
// import { AddCourseComponent } from './ngo/add-course/add-course.component';
// import { CoursesComponent } from './ngo/courses/courses.component';
import { StepdashboardComponent} from './step/stepdashboard/stepdashboard.component';
import { AdminLoginComponent } from './she/admin-login/admin-login.component';
import { HomeComponent } from './she/home/home.component';
import { NgoLoginComponent } from './she/ngo-login/ngo-login.component';
import { StepLoginComponent } from './she/step-login/step-login.component';
import { StepCoursesComponent } from './step/step-courses/step-courses.component';
import { StepAccomodationsComponent } from './step/step-accomodations/step-accomodations.component';
import { StepProfileComponent } from './step/step-profile/step-profile.component';
import { StepSukanyaComponent } from './step/step-sukanya/step-sukanya.component';
import { SukanyaRegisterComponent } from './step/sukanya-register/sukanya-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'she', pathMatch: 'full' },
  { path: 'she', component: HomeComponent },
  { path: 'she/ngo-login', component: NgoLoginComponent },
  { path: 'she/step-login', component: StepLoginComponent },
  { path: 'she/admin-login', component: AdminLoginComponent },
  { path: 'step/stepdashboard', component: StepdashboardComponent },
  { path: 'step/step-courses', component: StepCoursesComponent },
  {path: 'step/step-accomodations', component: StepAccomodationsComponent},
  {path: 'step/step-profile', component: StepProfileComponent},
  { path: 'step/step-sukanya', component: StepSukanyaComponent },
  { path: 'step/sukanya-register', component: SukanyaRegisterComponent },
  // { path: 'ngo/courses', component: CoursesComponent },
  // { path: 'ngo/accommodation', component: AccommodationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}