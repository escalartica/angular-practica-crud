import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas comunes
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crud-table',
  standalone: true,  // Añadir esta propiedad para hacerlo standalone
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
  imports: [CommonModule, RouterModule] // Asegúrate de que todos los módulos necesarios estén aquí
})
export class CrudTableComponent implements OnInit {
  cars = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', total: 20000 },
    { id: 2, marca: 'Ford', modelo: 'Focus', total: 18000 },
  ];

  constructor() { }

  ngOnInit(): void { }

  editCar(id: number) {
    console.log(`Edit car with ID: ${id}`);
  }

  deleteCar(id: number) {
    console.log(`Delete car with ID: ${id}`);
  }
}
