import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private apiUrl = `${environment.apiUrl}/brands`; // URL base para las peticiones

  constructor(private http: HttpClient) {}

  // Obtener todas las marcas
  getBrands(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: this.createAuthorizationHeader()
    });
  }

  // Obtener modelos de una marca específica
  getModelByBrand(brandId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${brandId}/models`, {
      headers: this.createAuthorizationHeader()
    });
  }

  // Crear encabezado con el token de autenticación
  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
