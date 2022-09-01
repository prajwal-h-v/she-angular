import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Greeting } from '../entity/Greeting';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {

  private url = "http://localhost:5001/greet"
  greeting: any;
  constructor(private httpClient: HttpClient) {}

  getGreeting(): Observable<Greeting> {
    return this.httpClient.get<Greeting>('');
  }
}
