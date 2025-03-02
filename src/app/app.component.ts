import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Si usas rutas
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './/home/home/breadcrumb/breadcrumb.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HomeComponent, BreadcrumbComponent],
})
export class AppComponent {
  // Lógica de tu componente si es necesario
  title = 'app';
}
