import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  fieldErrorMessage = "";
  passwordErrorMessage = "";

  constructor() { }

  ngOnInit() {
  }

  validateInput (email: string, fullName: string, username: string, password: string, verifyPassword: string) {
    if (email == '' || fullName == '' || username == '' || password == '' || verifyPassword == ''){
      this.fieldErrorMessage = "ALL FIELDS REQUIRED!";
    } else {
      this.fieldErrorMessage = "";
    }
    if (password != verifyPassword){
      this.passwordErrorMessage = "PASSWORDS MUST MATCH!";
    } else {
      this.passwordErrorMessage = "";
    }
  }

}
