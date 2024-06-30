import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuario}from '../models/usuarios'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl="http://localhost:4321/api/v1/usuarios"
  constructor(private http:HttpClient) {
    
   }
   getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl)
   }


}
