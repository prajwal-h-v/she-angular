import { HttpClient } from '@angular/common/http';
import { getNgModuleById, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgoAdmin } from './ngo-admin';

@Injectable({
  providedIn: 'root'
})
export class NgoadminService {

  // private url = "http://localhost:9090/getAll"

  constructor(private httpClient: HttpClient) {}

  getNgo(): Observable<NgoAdmin[]>{
      return this.httpClient.get<NgoAdmin[]>("http://localhost:9090/getAll");
  }
}
