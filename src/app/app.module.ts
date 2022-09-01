import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './she/home/home.component';
import { NavbarComponent } from './she/navbar/navbar.component';
import { NgoLoginComponent } from './she/ngo-login/ngo-login.component';
import { StepLoginComponent } from './she/step-login/step-login.component';
import { AdminLoginComponent } from './she/admin-login/admin-login.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';

import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { AddCourseComponent } from './ngo/add-course/add-course.component';
import { AddAccommodationComponent } from './ngo/add-accommodation/add-accommodation.component';
import { NgoNavbarComponent } from './ngo/ngo-navbar/ngo-navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgoStatusComponent } from './ngo/status/status.component';
import { UnderContructionComponent } from './shared/under-contruction/under-contruction.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { NgoCenterComponent } from './admin/ngo-center/ngo-center.component';
import { StepDashboardComponent } from './step/step-dashboard/step-dashboard.component';
import { StepNavbarComponent } from './step/step-navbar/step-navbar.component';
import { StepCoursesComponent } from './step/step-courses/step-courses.component';
import { StepAccomodationComponent } from './step/step-accomodation/step-accomodation.component';
import { StepProfileComponent } from './step/step-profile/step-profile.component';
import { StepSukanyaComponent } from './step/step-sukanya/step-sukanya.component';
import { StepRegisterComponent } from './step/step-register/step-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NgoLoginComponent,
    StepLoginComponent,
    AdminLoginComponent,
    MainHeaderComponent,
    MainFooterComponent,
    DashboardComponent,
    AddCourseComponent,
    AddAccommodationComponent,
    NgoNavbarComponent,
    NgoStatusComponent,
    UnderContructionComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    NgoCenterComponent,
    StepDashboardComponent,
    StepNavbarComponent,
    StepCoursesComponent,
    StepAccomodationComponent,
    StepProfileComponent,
    StepSukanyaComponent,

    StepRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
