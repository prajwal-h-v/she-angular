import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/model/Ngo';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.css'],
})
export class AddAccommodationComponent implements OnInit {
  ngo: Ngo;
  constructor(private ngoAuth: NgoAuthService, private router: Router) {
    this.ngo = new Ngo();
  }

  ngOnInit(): void {
    this.ngo = this.ngoAuth.getLocalNgo();
    if (this.ngo === null) this.router.navigate(['/she/ngo-login']);
  }
}
