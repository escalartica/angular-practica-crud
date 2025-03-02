import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes
import { HomeComponent } from './home/home.component'; // Standalone
import { CreateCarComponent } from './home/home/create-car/create-car.component'; // Standalone
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';
import { CrudTableComponent } from './home/home/crud-table/crud-table.component';

const routes: Routes = [
  // Ruta principal donde se mostrará la tabla de coches (HomeComponent)
  { path: '', component: HomeComponent },  // Aquí se carga HomeComponent por defecto

  // Ruta para la creación de coches
  { path: 'create', component: CreateCarComponent },  // Página de creación de coche

  // Ruta para los detalles del coche
  { path: 'detail/:id', component: CarDetailComponent },  // Muestra los detalles de un coche por ID

  // Ruta para editar un coche
  { path: 'edit/:id', component: EditCarComponent },  // Editar coche por ID

  // Ruta para mostrar solo la tabla de coches (CRUD)
  { path: 'crud', component: CrudTableComponent },  // Página de CRUD de coches
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas en la aplicación
  exports: [RouterModule]  // Exporta RouterModule para usar en toda la aplicación
})
export class AppRoutingModule {}
