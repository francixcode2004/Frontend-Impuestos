import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Impuesto} from '../../app/models/impuesto'


@Injectable({
  providedIn: 'root',
})
export class ImpuestoService {
  private apiUrl = 'http://localhost:4200/assets/data/dataImpuestos.json'; 
  constructor(private http: HttpClient) {}

  guardarImpuestoEnArchivo(impuesto: Impuesto): Observable<any> {
    return new Observable((observer) => {
      this.http.get<any>(this.apiUrl).subscribe((data) => {
        const impuestos = data;
        impuestos.push(impuesto);

        // Guardar los datos actualizados en el archivo JSON
        const updatedData = JSON.stringify(impuestos, null, 2);
        this.guardarArchivo(updatedData).subscribe(() => {
          observer.next({ message: 'Datos guardados en el archivo.' });
          observer.complete();
        });
      });
    });
  }

  private guardarArchivo(data: string): Observable<any> {
    // Simular la escritura del archivo (solo para fines de desarrollo)
    // En producción, debes implementar una lógica adecuada para escribir en un servidor backend
    return new Observable((observer) => {
      // Simular una pequeña demora para emular una operación de escritura
      setTimeout(() => {
        console.log('Datos guardados en el archivo:', data);
        observer.next();
        observer.complete();
      }, 1000); // 1 segundo de demora simulada
    });
  }
  obtenerImpuestosDesdeArchivo(): Observable<Impuesto[]> {
    return this.http.get<Impuesto[]>(this.apiUrl);
  }
  // URL de tu API o archivo de destino
  /*
  constructor() {}

  guardarImpuestoEnBackend(impuesto: Impuesto): Promise<any> {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(impuesto),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud al backend.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error al guardar el impuesto en el backend:', error);
      throw error;
    });
  }
    */
}
