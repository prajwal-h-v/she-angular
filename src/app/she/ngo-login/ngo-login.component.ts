import { HttpErrorResponse } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/model/Ngo';
import { NgoAuthService } from 'src/app/services/ngo-auth.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css'],
})
export class NgoLoginComponent implements OnInit {
  ngoLoginForm: FormGroup;
  ngoRegisterForm: FormGroup;
  isError: boolean = false;
  ngos: Array<Ngo>;
  errorMessage: string = 'Error in login';
  constructor(private ngoAuth: NgoAuthService, private router: Router) {
    this.ngoLoginForm = new FormGroup({
      ngoID: new FormControl('', Validators.required),
      ngoPassword: new FormControl('', Validators.required),
    });

    this.ngos = new Array<Ngo>();

    this.ngoRegisterForm = new FormGroup({
      ngoName: new FormControl('', Validators.required),
      ngoEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required]),
      ngoDescription: new FormControl('', Validators.required),
      ngoLocation: new FormControl('', Validators.required),
      ngoContact: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.ngoAuth.getNgoList().subscribe((data) => {
      this.ngos = data;
    });
  }

  requestLogin() {
    let loginData = this.ngoLoginForm.getRawValue();

    this.ngoAuth.login(loginData).subscribe(
      (data: Ngo) => {
        // console.log(JSON.stringify(data));
        if (data !== null) {
          if (data.verified) {
            sessionStorage.setItem('activeNgo', JSON.stringify(data));
            this.router.navigate(['/ngo/dashboard']);
            this.isError = false;
          } else {
            this.isError = true;
            this.errorMessage =
              'Your Account is not valid. Please try again later';
            setTimeout(() => {
              this.isError = false;
              this.errorMessage = '';
            }, 3000);
          }
        } else {
          this.isError = true;
          this.errorMessage = 'Invalid Credentials.!';
          setTimeout(() => {
            this.isError = false;
            this.errorMessage = '';
          }, 3000);
        }
      },
      (error) => {
        if (error.status === 0) {
          this.isError = true;
          this.errorMessage =
            'Could not connect to server!\nPlease try again later';
        }
        setTimeout(() => {
          this.isError = false;
          this.errorMessage = '';
        }, 3000);
      }
    );
  }

  isSuccess = false;
  successMsg = '';
  requestRegisterNgo() {
    let registerData = this.ngoRegisterForm.getRawValue();
    if (registerData.password !== registerData.confirmPassword) {
      this.isError = true;
      this.errorMessage = 'Password do not match';
      setTimeout(() => {
        this.isError = false;
        this.errorMessage = '';
      }, 3000);
      return;
    }
    this.isError = false;
    this.ngoAuth.register(registerData).subscribe(
      (data) => {
        console.log(data);
        this.ngoRegisterForm.reset();
        this.isSuccess = true;
        this.successMsg =
          'Registered succesfully. Please use ' +
          data.ngoId +
          ' and your password to login';
      },
      (error) => {
        console.log(error);
        this.isError = true;
        this.errorMessage = error;
        setTimeout(() => {
          this.isError = false;
          this.errorMessage = '';
        }, 3000);
      }
    );
  }
  isLogin: boolean = true;
  toggle(val: boolean) {
    this.isLogin = val;
  }
}
