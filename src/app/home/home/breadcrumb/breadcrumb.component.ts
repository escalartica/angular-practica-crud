import { Component } from '@angular/core';// Importar los módulos de Material necesarios

// Importa los módulos de Angular Material necesarios
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Si necesitas iconos
import { MatToolbarModule } from '@angular/material/toolbar'; // Si necesitas barras de herramientas
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatTableModule], 
})
export class BreadcrumbComponent {
  // Tu código aquí
}
