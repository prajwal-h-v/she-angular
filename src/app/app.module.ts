import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RegisterComponent } from './step/sukanya/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './step/sukanya/home/home.component';
import { NavbarComponent } from './step/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HomeComponent, NavbarComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
