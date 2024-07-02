import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Impuesto} from '../../app/models/impuesto'


@Injectable({
  providedIn: 'root',
})
export class ImpuestoService {
  private impuestosURL = 'http://localhost:4321/api/v1/impuestos'; 
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem("authToken");
  }
  getImpuestos(cedula: string): Observable<Impuesto[]> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    
    const url = `${this.impuestosURL}/${cedula}`;
    console.log("La url es",url)
    return this.http.get<Impuesto[]>(url,{headers});
  };
  
}
