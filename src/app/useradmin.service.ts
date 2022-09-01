import { Injectable } from '@angular/core';
import { Useradmin } from './useradmin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UseradminService {

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<Useradmin[]>{
      return this.httpClient.get<Useradmin[]>("http://localhost:9090/getAllUser");
  }
}
