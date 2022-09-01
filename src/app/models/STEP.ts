export class STEP{

    stepId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: number;
    disabled: number;
    dob: any;
    email: string;
    contact: string;
    aadharNo: string;
    panNo: string;
    jobstatus: number;
    jobtitle: string;
    salary: number;
    residence: number;
    maritalstatus: number;
    stepPwd: string;
    stepConPwd: string;

  constructor() {
    this.stepId = 0;
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';
    this.gender = 0;
    this.disabled = 0;
    this.dob = '';
    this.email = '';
    this.contact = '';
    this.aadharNo = '';
    this.panNo = '';
    this.jobstatus = 0;
    this.jobtitle = '';
    this.salary = 0;
    this.residence = 0;
    this.maritalstatus = 0;
    this.stepPwd = '';
    this.stepConPwd = '';
  }

}