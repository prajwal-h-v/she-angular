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
import { CoursesComponent } from './ngo/courses/courses.component';
import { AccommodationComponent } from './ngo/accommodation/accommodation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CoursesComponent,
    AccommodationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
