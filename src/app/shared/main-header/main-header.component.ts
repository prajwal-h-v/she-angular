import { Component, OnInit } from '@angular/core';
import { Greeting } from 'src/app/model/Greeting';
import { GreetingService } from 'src/app/services/greeting.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {
  greeting: any;
  constructor(private greetingService: GreetingService) {}
  ngOnInit(): void {
    this.greetingService.getGreeting().subscribe((data) => {
      console.log(data);

      this.greeting = data.greeting;
    });
  }
}
