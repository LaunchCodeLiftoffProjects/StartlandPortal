import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      school: ['', Validators.required],
      district: ['', Validators.required],
      position: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  
  get fval() { return this.registerForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
    return;
    }
    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe(
      data => {
        console.log(data);
        this.isSignUpFailed = false;
        this.router.navigate(['/log-in']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.loading = false;
        this.isSignUpFailed = true;
      }
    );
  }
}
