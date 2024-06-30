import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Usuario}from '../models/usuarios'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private get="http://localhost:4321/api/v1/usuarios";
  private regUser="http://localhost:4321/api/v1/register";

  private loginUrl = "http://localhost:4321/api/v1/login";

  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers = this.headers.append("Content-Type", "application/json");

    const authToken = this.getToken();
    if (authToken) {
      this.headers = this.headers.append("Authorization", authToken);
    }
  }
  
   getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.get)
   }
  
   registerUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.regUser, usuario);
  }
  login(user: { correo: string, password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.loginUrl, user, { headers: this.headers })
      .pipe(
        tap(response => this.saveToken(response.token))
      );
  }
  
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  
}
