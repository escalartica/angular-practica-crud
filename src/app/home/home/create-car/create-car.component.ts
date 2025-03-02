import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-car',
  standalone: true,  // Esto lo marca como un componente standalone
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {
  coche = { marca: '', modelo: '', total: 0 };

  constructor(private router: Router) {}

  crearCoche() {
    // Lógica para crear coche (por ejemplo, agregarlo a una lista o hacer una petición a la API)
    console.log('Coche creado', this.coche);
    this.router.navigate(['/']); // Redirigir al inicio
  }
}
