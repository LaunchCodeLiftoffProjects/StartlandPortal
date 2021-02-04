import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: UserDetails;

  constructor(private auth: AuthenticationService) {
   }

  ngOnInit() {
    this.auth.home().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

}
