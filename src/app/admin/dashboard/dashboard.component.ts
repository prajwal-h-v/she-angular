import { Component, OnInit } from '@angular/core';
import { NgoAdmin } from 'src/app/ngo-admin';
import { NgoadminService } from 'src/app/ngoadmin.service';
import { GreetingService } from 'src/app/services/greeting.service';
import { Useradmin } from 'src/app/useradmin';
import { UseradminService } from 'src/app/useradmin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  ngoad: NgoAdmin[];
  userad: Useradmin[];

  constructor(private ngoadminSerivice: NgoadminService, private useradminService: UseradminService) {
    this.ngoad = [];
    this.userad = [];
  }


  ngOnInit(): void {
    this.getNgo();
    this.getUser();
  }

  private getNgo(){
    this.ngoadminSerivice.getNgo().subscribe(data => {
      this.ngoad = data;
      console.log(data);
      
    });
  }

  private getUser(){
    this.useradminService.getUser().subscriobe(dataUser => {
      this.userad = dataUser;
      console.log(dataUser);
    })
  }

  rejectRequest(pos: number) {}
}
