import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // IMPORTANTE: RouterModule y Routes deben ser importados
import { HomeComponent } from './home/home.component';
import { CrudTableComponent } from './home/home/crud-table/crud-table.component';
import { CreateCarComponent } from './home/home/create-car/create-car.component';
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';


const routes: Routes = [
  // Ruta principal (Home) donde se mostrará la tabla de coches
  { path: '', component: HomeComponent }, // Ruta por defecto para Home

  // Ruta para la tabla de coches (CRUD)
  { path: 'home', component: HomeComponent },

  // Ruta para la creación de coches
  { path: 'create', component: CreateCarComponent },

  // Ruta para los detalles del coche
  { path: 'detail/:id', component: CarDetailComponent },

  // Ruta para editar un coche
  { path: 'edit/:id', component: EditCarComponent },

  // Ruta para el CRUD (este componente puede estar dentro de HomeComponent)
  { path: 'crud', component: CrudTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas
  exports: [RouterModule]  // Exporta RouterModule para que se pueda usar en toda la aplicación
})
export class AppRoutingModule {}
