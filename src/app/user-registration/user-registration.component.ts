import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../_services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  
  credentials: TokenPayload = {
    email: '',
    fullName: '',
    password: ''
  };

  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
    ) { }

    registerForm: FormGroup;
    loading = false;
    submitted = false;
    
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      });    
  }

  get fval() { return this.registerForm.controls; }
  
  register() {
    this.submitted = true;
    if (this.registerForm.invalid){
      return;
    }
    this.loading=true;
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
      this.toastr.error(err.error.message, 'Error');
    });
  }
}
