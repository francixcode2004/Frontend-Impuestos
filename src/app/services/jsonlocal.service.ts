// jsonlocal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonlocalService {
  private apiLocal = 'http://localhost:4321/api/v1/json/local';
  private apiOnline = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getJsonLocal(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLocal);
  }

  getJsonOnline(): Observable<any[]> {
    return this.http.get<any[]>(this.apiOnline);
  }
}
