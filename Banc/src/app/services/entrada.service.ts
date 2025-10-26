import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entrada } from '../models/entrada';
import { UrlConfig } from '../url.config/url.config';


@Injectable({
  providedIn: 'root'
})
export class EntradaService {
 constructor(private http: HttpClient){}
 
 viewEntrada(): Observable<entrada[]>{
  return this.http.get<entrada[]>(`${UrlConfig.baseUrl}/entrada`)
                                
 }

 criarEntrada(entrada: entrada): Observable<any> {
     return this.http.post<entrada>(`${UrlConfig.baseUrl}/create`, entrada);
   }
}
