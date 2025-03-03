import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './home/breadcrumb/breadcrumb.component';
import { CrudTableComponent } from './home/crud-table/crud-table.component';  // Asegúrate de importar el CrudTableComponent

@Component({
  selector: 'app-home',
  standalone: true,  // Esto lo marca como un componente standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule, 
    RouterModule,
    BreadcrumbComponent,
    CrudTableComponent,  // Agrega el CrudTableComponent
  ]
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    console.log('HomeComponent cargado');
  }
}
