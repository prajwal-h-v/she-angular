import { Component, OnInit } from '@angular/core';
import { Useradmin } from 'src/app/useradmin';
import { Ngoadmin } from 'src/app/ngoadmin';
import { UserlistService } from 'src/app/userlistservice.service';
import { NgolistService } from 'src/app/ngolistservice.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css']
})
export class NgoListComponent implements OnInit {
  ngoad: Ngoadmin[];
  userad: Useradmin[];

  constructor(private ngolistSerivice: NgolistService, private userlistService: UserlistService) {
    this.ngoad = [];
    this.userad = [];
  }


  ngOnInit(): void {
    this.getNgo();
    this.getUser();
  }

  private getNgo(){
    this.ngolistSerivice.getNgo().subscribe(data => {
      this.ngoad = data;
      console.log(data);
      
    });
  }

  private getUser(){
    this.userlistService.getUser().subscriobe(dataUser => {
      this.userad = dataUser;
      console.log(dataUser);
    })
  }

  rejectRequest(pos: number) {}

}
