import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepCoursesComponent } from './step/step-courses/step-courses.component';
import { StepdashboardComponent } from './step/stepdashboard/stepdashboard.component';
import { StepAccomodationsComponent } from './step/step-accomodations/step-accomodations.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { HomeComponent } from './she/home/home.component';
import { NavbarComponent } from './she/navbar/navbar.component';
import { AdminLoginComponent } from './she/admin-login/admin-login.component';
import { StepLoginComponent } from './she/step-login/step-login.component';
import { NgoLoginComponent } from './she/ngo-login/ngo-login.component';
import { StepNavbarComponent } from './step/step-navbar/step-navbar.component';
import { StepProfileComponent } from './step/step-profile/step-profile.component';
import { StepSukanyaComponent } from './step/step-sukanya/step-sukanya.component';
import { SukanyaRegisterComponent } from './step/sukanya-register/sukanya-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateUserDetailsComponent } from './step/step-profile/update-user-details/update-user-details.component';
import { UpdateUserPasswordComponent } from './step/step-profile/update-user-password/update-user-password.component';
import { AddFamilyDetailsComponent } from './step/step-profile/add-family-details/add-family-details.component';



@NgModule({
  declarations: [
    AppComponent, 
    StepCoursesComponent, 
    StepdashboardComponent, 
    StepAccomodationsComponent, 
    MainHeaderComponent, 
    MainFooterComponent, 
    HomeComponent, 
    NavbarComponent, 
    AdminLoginComponent, 
    StepLoginComponent, 
    NgoLoginComponent, 
    StepNavbarComponent, 
    StepProfileComponent, 
    StepSukanyaComponent, 
    SukanyaRegisterComponent, 
    UpdateUserDetailsComponent, 
    UpdateUserPasswordComponent, 
    AddFamilyDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [HttpClient,HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
