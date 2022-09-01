import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { SukanyaRegister } from '../models/sukanya-register'; 


@Injectable({
  providedIn: 'root'
})
export class SukanyaService {

  constructor(private httpClient:HttpClient) { }

  // public register(sukanyaReg:SukanyaRegister):Observable<String>{    
  //   console.log(sukanyaReg.firstName);
  //   console.log(sukanyaReg.lastName);
  //   console.log(sukanyaReg.aadharNo);
  //   console.log(sukanyaReg.dob);
  //   console.log(sukanyaReg.aadharDoc);
  //   console.log(JSON.stringify(sukanyaReg));
    
  //   return this.httpClient.post<String>("http://localhost:9090/sukanya/register",sukanyaReg)
    
  // }

  register(data: any) {
    let regData = { 
        firstName: data.firstName, 
        lastName: data.lastName,  
        dob: data.dob, 
        aadharNo: data.aadharNo, 
    };

    console.log(JSON.stringify(regData));
    return this.httpClient.post<SukanyaRegister>(
      'http://localhost:9090/sukanya/register',
      regData
    );
  }
}