import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
    ) { }

    
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      // TODO: check password against database password.
      password: ['', [Validators.required]]
      });
  }

  get fval() { return this.loginForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.loginForm.invalid) {
    return;
    }
    this.loading = true;
    this.authenticationService.login(this.fval.email.value, this.fval.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
    error => {
      this.toastr.error(error.error.message, 'Error');
      this.loading = false;
    });
  }

}
