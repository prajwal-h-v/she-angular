import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Greeting } from '../models/Greeting';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  greeting: any;
  constructor(private httpClient: HttpClient) {}

  getGreeting(): Observable<Greeting> {
    return this.httpClient.get<Greeting>('http://localhost:9090/greet');
  }
}