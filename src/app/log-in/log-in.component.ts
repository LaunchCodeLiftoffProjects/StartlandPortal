import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { TokenStorageService } from '../_services/token-storage.service';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: any = {};
  roles: string[] = [];

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthenticationService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

    
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
      });

      if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getUser().roles;
      }
  }

  get fval() { return this.loginForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.loginForm.invalid) {
    return;
    }
    this.loading = true;
    this.authService.login(this.form).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;

          this.roles = this.tokenStorage.getUser().roles;
          this.router.navigate(['/home']);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          this.loading = false;
        }
      );
    }

    reloadPage() {
      window.location.reload();
    }
}
