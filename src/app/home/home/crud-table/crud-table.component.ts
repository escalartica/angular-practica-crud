import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatTableModule } from '@angular/material/table';  // Importa MatTableModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule para iconos
import { CdkMenuModule } from '@angular/cdk/menu'; // Importa el módulo de menús del CDK
import { MatMenuModule } from '@angular/material/menu'; // Importa el módulo de menús de Material

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
  standalone: true,
  imports: [
    MatTableModule, 
    MatButtonModule, 
    MatIconModule, 
    CdkMenuModule, 
    MatMenuModule // Asegúrate de tener los módulos importados aquí
  ]
})
export class CrudTableComponent {
  cars = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', total: 10000 },
    { id: 2, marca: 'Honda', modelo: 'Civic', total: 12000 },
    { id: 3, marca: 'Ford', modelo: 'Focus', total: 9000 }
  ];

  displayedColumns: string[] = ['id', 'marca', 'modelo', 'total', 'acciones'];

  constructor(private router: Router) {}

  // Acción de Ver
  viewDetails(id: number) {
    this.router.navigate([`/detail/${id}`]);
  }

  // Acción de Editar
  editCar(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  // Acción de Eliminar
  deleteCar(id: number) {
    const confirmed = window.confirm("¿Estás seguro de que quieres eliminar este coche?");
    if (confirmed) {
      this.cars = this.cars.filter(car => car.id !== id);  // Elimina el coche de la lista
    }
  }
}

