import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SukanyaRegister } from '../model/SukanyaRegister';

@Injectable({
  providedIn: 'root',
})
export class SukanyaService {
  constructor(private httpClient: HttpClient) {}

  public register(sukanyaReg: SukanyaRegister) {
    console.log(sukanyaReg.firstName);
    console.log(sukanyaReg.lastName);
    console.log(sukanyaReg.aadharNumber);
    console.log(sukanyaReg.dateOfBirth);
    console.log(sukanyaReg.aadharDoc);
    console.log(JSON.stringify(sukanyaReg));

    return this.httpClient.post<String>(
      'http://localhost:5001/sukanya/register',
      sukanyaReg
    );
  }
}
