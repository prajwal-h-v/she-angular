import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepdashboard',
  templateUrl: './stepdashboard.component.html',
  styleUrls: ['./stepdashboard.component.css']
})
export class StepdashboardComponent implements OnInit {

  // name: string = '';
  courses=[
    {
      title:"Java",
      mode:"offline",
      description:"dsdasdsaddsfsdfdfsd", 
      duration:3,
      location:"Pune",
      start_date:23052012
    },
    {
      title:"Python",
      mode:"offline",
      description:"dsdasdsaddsfsdfdfsd", 
      duration:3,
      location:"Pune",
      start_date:23052012
    }
  ]

  accomodations =[
    {
     name:"Sakhi",
     addressLine1:"online",
     addressLine2:"dsdasdsad",
     city:5,
     state:"Pune"
   },
   {
    name:"Sakhi2",
    addressLine1:"online",
    addressLine2:"dsdasdsad",
    city:5,
    state:"Pune"
  }
   
 ];  
  
  constructor() { }

  ngOnInit(): void {
  }

}
