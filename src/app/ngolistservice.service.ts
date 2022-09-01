import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ngoadmin } from './ngoadmin';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgolistService {

constructor(private httpClient: HttpClient) {}

getNgo(): Observable<Ngoadmin[]>{
    return this.httpClient.get<Ngoadmin[]>("http://localhost:9090/getAll");
}
}
