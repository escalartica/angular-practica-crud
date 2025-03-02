import { Component } from '@angular/core';
import { CrudTableComponent } from './home/crud-table/crud-table.component';  // Importar CrudTableComponent como standalone
import { RouterModule } from '@angular/router';  // Importamos RouterModule aquí
import { BreadcrumbComponent } from './home/breadcrumb/breadcrumb.component'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,  // Especificamos que es un componente standalone
  imports: [CrudTableComponent, RouterModule, BreadcrumbComponent, MatIconModule, MatToolbarModule]  // Importamos CrudTableComponent aquí
})
export class HomeComponent {
  // Lógica de tu componente Home
}
