import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Hostel } from 'src/app/models/Hostel';
import { Ngo } from 'src/app/models/Ngo';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.css'],
})
export class AddAccommodationComponent implements OnInit {
  ngo: Ngo;
  hostels: Array<Hostel>;
  newAccommodationForm: FormGroup;
  constructor(private ngoAuth: NgoAuthService, private router: Router) {
    this.ngo = new Ngo();
    this.hostels = new Array();
    this.newAccommodationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      addressLane1: new FormControl('', Validators.required),
      addressLane2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pinCode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      totalRooms: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      dayCareCenter: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.ngo = this.ngoAuth.getLocalNgo();
    if (this.ngo === null) this.router.navigate(['/she/ngo-login']);
    this.refreshHostel();
  }

  refreshHostel() {
    this.ngoAuth.getHostelList(false).subscribe((hostels) => {
      console.log(hostels);

      this.hostels = hostels;
    });
  }

  isAddSuccess: boolean = false;
  addMessage = '';
  requestSubmit() {
    let formData = this.newAccommodationForm.getRawValue();
    let hostel: Hostel = formData;

    hostel.ngoId = this.ngo.ngoId;
    this.ngoAuth.addHostel(hostel).subscribe((data) => {
      this.isAddSuccess = true;
      this.addMessage = 'Successfull!!';
      this.refreshHostel();
      setTimeout(() => {
        this.isAddSuccess = false;
      }, 3000);
    });
  }
}
