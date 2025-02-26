import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent {
  coches = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', total: 20000 },
    { id: 2, marca: 'Ford', modelo: 'Focus', total: 18000 },
    { id: 3, marca: 'Chevrolet', modelo: 'Cruze', total: 22000 }
  ];

  constructor(private router: Router) {}

  editarCoche(coche: any) {
    // Redirigir a la vista de edición
    this.router.navigate(['/edit', coche.id]);
  }

  eliminarCoche(coche: any) {
    // Mostrar ventana modal de confirmación antes de eliminar
    const confirmacion = window.confirm(`¿Estás seguro de eliminar el coche ${coche.marca} ${coche.modelo}?`);
    if (confirmacion) {
      // Lógica para eliminar el coche de la lista
      this.coches = this.coches.filter(c => c.id !== coche.id);
    }
  }
}
