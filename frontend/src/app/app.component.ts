// src/app/app.component.ts
import { ButtonStyleDirective } from './shared/button-style.directive';  // Asegúrate de la ruta correcta
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Si usas rutas

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Esto hace que sea un componente standalone
  imports: [RouterModule]  // Asegúrate de importar RouterModule si estás utilizando rutas
})
export class AppComponent {
  // Lógica de tu componente
}
