import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private configUrl = 'http://localhost:4200/assets/data/datos.json';
  constructor(private http: HttpClient) { }
  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.configUrl);
  }
}
