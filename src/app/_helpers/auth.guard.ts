import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()

export class AuthGuard implements CanActivate {
  
  constructor(
  private router: Router,
  private auth: AuthenticationService
  ) {}
   
  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
