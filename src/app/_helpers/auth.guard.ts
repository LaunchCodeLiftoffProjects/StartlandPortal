import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
  private router: Router,
  private authenticationService: AuthenticationService
  ) {}
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const currentUser = this.authenticationService.currentUserValue;
  if (currentUser) {
  // authorised so return true
  return true;
  }
   
  // not logged in so redirect to login page
  this.router.navigate(['/log-in'], { queryParams: { returnUrl: state.url }});
  return false;
  }
}
