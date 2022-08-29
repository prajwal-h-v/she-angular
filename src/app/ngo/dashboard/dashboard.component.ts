import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Ngo } from 'src/app/models/Ngo';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name: string = '';
  constructor(private router: Router, private ngoAuth: NgoAuthService) {
    this.ngo = new Ngo();
  }
  ngo: Ngo;
  ngOnInit(): void {
    this.ngo = this.ngoAuth.getLocalNgo();
    if (this.ngo === null) this.router.navigate(['/she/ngo-login']);
    console.log(this.ngo);
    this.ngoAuth.getCourseCount(this.ngo.ngoId).subscribe((d) => {
      this.cc = d.length;
    });
  }
  cc: any = 0;
}
