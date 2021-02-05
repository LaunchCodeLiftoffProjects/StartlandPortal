import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private formBuilder: FormBuilder
    ) { }

    loginForm: FormGroup;
    loading = false;
    submitted = false;

    
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      });
  }

  get fval() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.loading=true;
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
    });
  }

}
