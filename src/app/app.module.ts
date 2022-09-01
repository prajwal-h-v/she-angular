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
import { AddFamilyDetailsComponent } from './step/step-profile/add-family-details/add-family-details.component';
import { UpdateUserDetailsComponent } from './step/step-profile/update-user-details/update-user-details.component';
import { UpdateUserPasswordComponent } from './step/step-profile/update-user-password/update-user-password.component';
// material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
// import { MatErrorModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
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
    AddFamilyDetailsComponent,
    UpdateUserDetailsComponent,
    UpdateUserPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
