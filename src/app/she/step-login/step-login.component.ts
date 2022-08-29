import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-login',
  templateUrl: './step-login.component.html',
  styles: [
  ]
})
export class StepLoginComponent implements OnInit {

  stepLoginForm: FormGroup;
  stepRegForm: FormGroup;
  isError: boolean=false;
  errorMessage: String="Error in Login";
  constructor() { 
    this.stepLoginForm = new FormGroup({
      stepId: new FormControl('', Validators.required),
      stepPwd: new FormControl('', Validators.required)
    });

    this.stepRegForm = new FormGroup({
        
    });
  }



  ngOnInit(): void {
  }

  isLogin:boolean=true;
  toggle(val: boolean){
    this.isLogin=val;
  }
 
}
