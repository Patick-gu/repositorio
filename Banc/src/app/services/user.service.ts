import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/user';
import { UrlConfig } from '../url.config/url.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

   createUser(login: Login): Observable<any> {
    return this.http.post<Login>(`${UrlConfig.baseUrl}/Create`, login);
  }
}
