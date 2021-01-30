import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

    loginForm: FormGroup;
    loading = false;
    submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      // TODO: check password against database password.
      password: ['', [Validators.required, Validators.minLength(6)]]
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
    // should this route to the home page upon login?
  }

}
