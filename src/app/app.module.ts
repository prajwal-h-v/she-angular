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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateUserDetailsComponent } from './step/step-profile/update-user-details/update-user-details.component';
import { UpdateUserPasswordComponent } from './step/step-profile/update-user-password/update-user-password.component';
import { AddFamilyDetailsComponent } from './step/step-profile/add-family-details/add-family-details.component';

// material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
// import { MatErrorModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDatepickerInput } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';  
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';

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

  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    // MatErrorModule,
    MatInputModule,
    MatRadioModule,
    // MatDatepickerContent,
    MatSnackBarModule,
    // MatDatepickerInput,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDividerModule
    
  ],
  providers: [
    HttpClient,
    HttpClientModule,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
