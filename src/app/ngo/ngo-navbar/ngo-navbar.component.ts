import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngo-navbar',
  templateUrl: './ngo-navbar.component.html',
  styleUrls: ['./ngo-navbar.component.css'],
})
export class NgoNavbarComponent implements OnInit {
  @Input() currentTab: string = '';
  constructor() {}

  ngOnInit(): void {}
}
