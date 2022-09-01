import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STEP } from '../models/STEP';

@Injectable({
    providedIn: 'root',
})

export class StepAuthService {
    constructor(private httpClient: HttpClient) {}

    login(data: any): Observable<STEP> {
        console.log(data);
        let logindata = { stepId: data.stepId, stepPwd: data.stepPwd};
        return this.httpClient.post<STEP>(
          'http://localhost:9090/step/login',
          logindata
        );
    }

    register(data: any) {
        let regData = {
            stepId: data.stepId,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            gender: data.gender,
            disabled: data.disabled,
            dob: data.dob,
            email: data.email,
            contact: data.contact,
            aadharNo: data.aadharNo,
            panNo: data.panNo,
            jobstatus: data.jobstatus,
            jobtitle: data.jobtitle,
            salary: data.salary,
            residence: data.residence,
            maritalstatus: data.maritalstatus,
            stepPwd: data.stepPwd,
            stepConPwd: data.stepConPwd,
        };

        console.log(JSON.stringify(regData));
        return this.httpClient.post<STEP>(
          'http://localhost:9090/step/register',
          regData
        );
      }
}