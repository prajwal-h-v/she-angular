import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AccommodationComponent } from './ngo/accommodation/accommodation.component';
import { AddAccommodationComponent } from './ngo/add-accommodation/add-accommodation.component';
import { AddCourseComponent } from './ngo/add-course/add-course.component';
import { CoursesComponent } from './ngo/courses/courses.component';
import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { AdminLoginComponent } from './she/admin-login/admin-login.component';
import { HomeComponent } from './she/home/home.component';
import { NgoLoginComponent } from './she/ngo-login/ngo-login.component';
import { StepLoginComponent } from './she/step-login/step-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'she', pathMatch: 'full' },
  { path: 'she', component: HomeComponent },
  { path: 'she/ngo-login', component: NgoLoginComponent },
  { path: 'she/step-login', component: StepLoginComponent },
  { path: 'she/admin-login', component: AdminLoginComponent },
  { path: 'ngo/dashboard', component: DashboardComponent },
  { path: 'ngo/new-course', component: AddCourseComponent },
  { path: 'ngo/new-accommodation', component: AddAccommodationComponent },
  { path: 'ngo/courses', component: CoursesComponent },
  { path: 'ngo/accommodation', component: AccommodationComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/ngo-list', component: AdminDashboardComponent },
  { path: 'admin/user-list', component: AdminDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
