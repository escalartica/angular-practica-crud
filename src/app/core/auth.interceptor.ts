import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth-token');  // Obtener el token del localStorage
    
    if (token) {
      // Si existe el token, lo añadimos a la solicitud
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(clonedRequest);  // Continuamos con la solicitud modificada
    }

    return next.handle(req);  // Si no hay token, continuamos con la solicitud original
  }
}
