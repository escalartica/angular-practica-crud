import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';  // Corregido

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = `${environment.apiUrl}/cars`; // URL base para las peticiones

  constructor(private http: HttpClient) {}

  // Obtener todos los coches
  getCars(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: this.createAuthorizationHeader()
    });
  }

  // Obtener un coche por su ID
  getCarById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {
      headers: this.createAuthorizationHeader()
    });
  }

  // Crear un nuevo coche
  createCar(car: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, car, {
      headers: this.createAuthorizationHeader()
    });
  }

  // Actualizar un coche
  updateCar(id: number, car: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, car, {
      headers: this.createAuthorizationHeader()
    });
  }

  // Eliminar un coche
  deleteCar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.createAuthorizationHeader()
    });
  }


  // Crear encabezado con el token de autenticación
  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    // Verificar si el token existe
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
    // Si no hay token, devuelve un encabezado vacío
    return new HttpHeaders();
  }
}

