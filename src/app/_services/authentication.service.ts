import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })

export class AuthenticationService {

  userLoggedIn: any; 

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private router: Router
    ) { }

    

  canActivate(){
    this.userLoggedIn = !!this.tokenStorageService.getToken();

    if (this.userLoggedIn){
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password
    }, httpOptions);
  }
}
