import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './step/sukanya/home/home.component';
import { RegisterComponent } from './step/sukanya/register/register.component'; 

const routes: Routes = [
  {path:"sukanyaHome", component: HomeComponent},
  {path:"sukanyaRegister", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
