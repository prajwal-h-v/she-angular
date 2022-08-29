import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RegisterComponent } from './step/sukanya/sukanya-register/register.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SukanyaHomeComponent } from './step/sukanya/sukanya-home/sukanya-home.component';
import { SukanyaNavbarComponent } from './step/sukanya/sukanya-navbar/sukanya-navbar.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { HomeComponent } from './she/home/home.component';
import { NavbarComponent } from './she/navbar/navbar.component';
import { StepLoginComponent } from './she/step-login/step-login.component';
import { StepHeaderComponent } from './step/step-header/step-header.component';
import { StepHomeComponent } from './step/step-home/step-home.component';
import { AdminLoginComponent } from './she/admin-login/admin-login.component';
import { NgoLoginComponent } from './she/ngo-login/ngo-login.component';
import { AccommodationComponent } from './ngo/accommodation/accommodation.component';
import { AddAccommodationComponent } from './ngo/add-accommodation/add-accommodation.component';
import { AddCourseComponent } from './ngo/add-course/add-course.component';
import { CoursesComponent } from './ngo/courses/courses.component';
import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { NgoNavbarComponent } from './ngo/ngo-navbar/ngo-navbar.component';

@NgModule({
  declarations: [AppComponent, SukanyaHomeComponent, 
                  HomeComponent, SukanyaNavbarComponent, 
                  RegisterComponent, MainFooterComponent, 
                  MainHeaderComponent, NavbarComponent, 
                  StepLoginComponent, StepHeaderComponent, 
                  StepHomeComponent, StepHomeComponent,
                  AdminLoginComponent, NgoLoginComponent, 
                  AccommodationComponent, AddAccommodationComponent,
                  AddCourseComponent, CoursesComponent, 
                  DashboardComponent, NgoNavbarComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule ,
            FormsModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
