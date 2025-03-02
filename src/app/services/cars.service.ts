import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define la URL base de la API (deberás cambiarla por la correcta de tu backend)
const BASE_URL = 'http://localhost:3000/api'; // Reemplaza por tu URL base

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  constructor(private http: HttpClient) {}

  // Obtener todos los coches (GET /cars)
  getCars(): Observable<any> {
    return this.http.get(`${BASE_URL}/cars`);
  }

  // Obtener un coche por ID (GET /cars/:id)
  getCarById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/cars/${id}`);
  }

  // Crear un coche (POST /cars)
  createCar(car: any): Observable<any> {
    return this.http.post(`${BASE_URL}/cars`, car);
  }

  // Actualizar un coche (PUT /cars/:id)
  updateCar(id: number, car: any): Observable<any> {
    return this.http.put(`${BASE_URL}/cars/${id}`, car);
  }

  // Eliminar un coche (DELETE /cars/:id)
  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/cars/${id}`);
  }
}
