import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Si usas rutas en tu componente standalone


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,  // Esto hace que sea un componente standalone
  imports: []  // Asegúrate de incluir módulos necesarios, como RouterModule si es necesario
})
export class HomeComponent {
  // Lógica de tu componente
}
