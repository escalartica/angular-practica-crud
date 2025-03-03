import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@Component({
  selector: 'app-create-car',
  standalone: true,
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css'],
  imports: [FormsModule]  // Asegúrate de agregar FormsModule aquí
})
export class CreateCarComponent {
  coche = {
    marca: '',
    modelo: '',
    total: 0
  };

  constructor(private router: Router) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el coche creado.
    console.log('Coche creado', this.coche);
    
    // Redirigir al inicio o a alguna otra ruta después de guardar el coche
    this.router.navigate(['/']);
  }
}
