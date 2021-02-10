import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  form: any = {};
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
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
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.toastr.error(err.error.message, 'Error');
        this.loading = false;
      }
    );
  }
}
