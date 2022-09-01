import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/model/Ngo';
import { GreetingService } from 'src/app/services/greeting.service';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-ngo-navbar',
  templateUrl: './ngo-navbar.component.html',
  styleUrls: ['./ngo-navbar.component.css'],
})
export class NgoNavbarComponent implements OnInit {
  @Input() currentTab: string = '';
  ngo: Ngo = new Ngo();
  greet: string = '';
  constructor(
    private ngoAuth: NgoAuthService,
    private router: Router,
    private greetService: GreetingService
  ) {}

  ngOnInit(): void {
    this.ngo = this.ngoAuth.getLocalNgo();
    this.greetService.getGreeting().subscribe((data) => {
      this.greet = data.greeting;
    });
  }

  logout() {
    this.ngoAuth.requestLogout();
    this.router.navigate(['/she/ngo-login']);
  }
}
