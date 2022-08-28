import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-navbar',
  templateUrl: './step-navbar.component.html',
  styleUrls: ['./step-navbar.component.css']
})
export class StepNavbarComponent implements OnInit {
  
  @Input() currentTab: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
