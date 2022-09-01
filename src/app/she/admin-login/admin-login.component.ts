import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styles: [],
})
export class AdminLoginComponent implements OnInit {
  isError = false;
  message = '';
  constructor(private adminService: AdminService, private router: Router) {
    this.adminLoginForm = new FormGroup({
      adminId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  adminLoginForm: FormGroup;
  ngOnInit(): void {}
  requestLogin() {
    let formData: Admin = this.adminLoginForm.getRawValue();
    this.adminService.requestLogin(formData).subscribe(
      (data) => {
        if (data !== null) {
          sessionStorage.setItem('admin', JSON.stringify(data));
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.isError = true;
          this.message = 'Invalid Credentials';
          setTimeout(() => {
            this.isError = false;
          }, 3000);
        }
      },
      (error) => {
        console.log(error);
        this.isError = true;
        this.message = 'Server is unreachable. Try again Later';
        setTimeout(() => {
          this.isError = false;
        }, 3000);
      }
    );
  }
}
