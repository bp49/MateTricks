import { Injectable } from '@angular/core';
import { AuthUser } from '../Models/auth-user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService {

  baseUrl = 'http://mvcmovie20180227111318number6.azurewebsites.net/api/auth/'; 
  constructor(private http: HttpClient, private JwtHelperService: JwtHelperService) { }
  
  login(user) {
    return this.http.post<AuthUser>(this.baseUrl + 'login', user)
      .map((result: AuthUser) => {
        if (result) {
          localStorage.setItem('token', result.tokenString);
          localStorage.setItem('user', JSON.stringify(result.user));
          console.log('token');
        }
        return result;
      });
  }

  Register(model) {
    return this.http.post<AuthUser>(this.baseUrl + 'register', model);
  }

  IsExpired() {
    return this.JwtHelperService.isTokenExpired(); 
  }

  LogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('User');
    console.log("Logout Successful");

  }
}
