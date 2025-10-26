
import { Credenciais } from './../models/credenciais';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UrlConfig } from '../url.config/url.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais){
    return this.http.post(`${UrlConfig.baseUrl}/`, creds, {
      observe: 'response',
      responseType: 'text'
    }
    );
  }

  seccessfulLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    if(token != null){
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  logout(){
    localStorage.clear();
  }
}
