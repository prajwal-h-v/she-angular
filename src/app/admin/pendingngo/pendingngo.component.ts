import { Component, OnInit } from '@angular/core';
import { NgoAdmin } from 'src/app/ngo-admin';
import { GreetingService } from 'src/app/services/greeting.service';

@Component({
  selector: 'app-pendingngo',
  templateUrl: './pendingngo.component.html',
  styleUrls: ['./pendingngo.component.css']
})
export class PendingngoComponent implements OnInit {

  ngoad: NgoAdmin[];

  constructor(private greetingSerivice: GreetingService) {
    this.ngoad = [];
  }

  ngOnInit(): void {
    this.getNgo();
  }

  private getNgo(){
    // this.greetingSerivice.getNgo().subscribe((data) => {
    //   this.ngoad = data;
    // });
  }

}
