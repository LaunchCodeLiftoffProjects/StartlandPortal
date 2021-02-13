import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
  
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;
  
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        
        this.username = user.username;
      }
    }
  
    logout() {
      this.tokenStorageService.signOut();
      window.location.reload();
    }

}
