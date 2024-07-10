import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Usuario, UsuarioLogin } from "../models/usuarios";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private getUsusariosURL = "http://localhost:4321/api/v1/usuarios";
  private regUser = "http://localhost:4321/api/v1/register";

  private loginUrl = "http://localhost:4321/api/v1/login";

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.getUsusariosURL);
  }

  registerUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.regUser, usuario);
  }
  login(userLogin: UsuarioLogin): Observable<void> {
    return this.http.post<{ token: string }>(this.loginUrl, userLogin).pipe(
      map((response) => {
        this.saveToken(response.token);
      })
    );
  }

  saveToken(token: string): void {
    localStorage.setItem("authToken", token);
  }

  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  logout(): void {
    localStorage.removeItem("authToken");
  }
}
