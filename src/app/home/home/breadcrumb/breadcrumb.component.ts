import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';  // Importar MatToolbarModule

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],  // Importar los módulos de Angular Material aquí
})
export class BreadcrumbComponent {
  // Tu código aquí
}
