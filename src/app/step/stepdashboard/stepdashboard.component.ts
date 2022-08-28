import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepdashboard',
  templateUrl: './stepdashboard.component.html',
  styleUrls: ['./stepdashboard.component.css']
})
export class StepdashboardComponent implements OnInit {

  // name: string = '';


  courses =[
    {
     title:"Java",
     mode:"online",
     description:"dsdasdsad",
     duration:5,
     location:"Pune",
     start_date:23052012
   },
   {
     title:"Java",
     mode:"offline",
     description:"dsdasdsaddsfsdfdfsd", 
     duration:3,
     location:"Pune",
     start_date:23052012
   }
 ];  
  
  constructor() { }

  ngOnInit(): void {
  }

}
