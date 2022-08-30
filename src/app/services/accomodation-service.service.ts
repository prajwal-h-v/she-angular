import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../models/accomodation';
import { Accomodation_status } from '../models/accomodation-status';
@Injectable({
    providedIn: 'root'
  })
  export class AccomodationService {
  register(accomodationId: number,userId:number) : Observable<Accomodation_status> 
  {
    console.log(accomodationId, userId);
    return this.httpClient.get<Accomodation_status>(`http://localhost:9090/accommodation/${accomodationId}/register/${userId}`);

  }

   
  getaccomodation():Observable< Accommodation[]> {
      return this.httpClient.get<Accommodation[]>("http://localhost:9090/accommodation/list-accomodation");
 
     }
    
  
    //accomodationstatus:Accommodation[] =[];
    constructor(private httpClient:HttpClient) { 
     
    }
    
  }