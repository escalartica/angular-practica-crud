import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Asegúrate de tener un componente Home
import { CreateCarComponent } from './home/home/create-car/create-car.component';
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';
import { CrudTableComponent } from './home/home/crud-table/crud-table.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta principal que muestra los coches
  { path: 'create', component: CreateCarComponent },  // Ruta para crear un coche
  { path: 'detail/:id', component: CarDetailComponent },  // Ruta para mostrar detalles de un coche
  { path: 'edit/:id', component: EditCarComponent },  // Ruta para editar un coche
  { path: '**', redirectTo: '' }  // Ruta por defecto si no hay coincidencia
];
