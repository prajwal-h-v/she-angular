import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin';
import { Greeting } from 'src/app/model/Greeting';
import { AdminService } from 'src/app/services/admin.service';
import { GreetingService } from 'src/app/services/greeting.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent implements OnInit {
  greeting: Greeting = new Greeting();
  admin: Admin;
  @Input() currentTab = '';
  constructor(
    private greet: GreetingService,
    private adminService: AdminService,
    private router: Router
  ) {
    this.greet.getGreeting().subscribe((data) => {
      this.greeting = data;
    });
    this.admin = new Admin();
  }

  ngOnInit(): void {
    this.admin = this.adminService.getLocalAdmin();
    if (this.admin === null) {
      this.router.navigate(['/she/admin-login']);
    }
  }

  logout() {
    this.adminService.requestLogout();
    this.router.navigate(['/she/admin-login']);
  }
}
