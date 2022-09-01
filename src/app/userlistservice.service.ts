import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Useradmin } from './useradmin';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<Useradmin[]>{
      return this.httpClient.get<Useradmin[]>("http://localhost:9090/getAllUser");
  }
}
