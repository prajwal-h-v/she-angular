import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/models/Ngo';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-ngo-navbar',
  templateUrl: './ngo-navbar.component.html',
  styleUrls: ['./ngo-navbar.component.css'],
})
export class NgoNavbarComponent implements OnInit {
  @Input() currentTab: string = '';
  ngo: Ngo = new Ngo();
  constructor(private ngoAuth: NgoAuthService, private router: Router) {}

  ngOnInit(): void {
    this.ngo = this.ngoAuth.getLocalNgo();
  }

  logout() {
    this.ngoAuth.requestLogout();
    this.router.navigate(['/she/ngo-login']);
  }
}
