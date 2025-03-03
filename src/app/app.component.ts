import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Si usas rutas
import { HomeComponent } from './home/home.component';  // Importa HomeComponent si es necesario
import { BreadcrumbComponent } from './home/home/breadcrumb/breadcrumb.component';  // Importa Breadcrumb

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, HomeComponent]  // Importar componentes standalone aquí
})
export class AppComponent {
  title = 'app';
}
