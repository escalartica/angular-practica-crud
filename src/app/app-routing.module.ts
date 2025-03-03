import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateCarComponent } from './home/home/create-car/create-car.component';
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta principal (HomeComponent)
  { path: 'create', component: CreateCarComponent },  // Ruta para crear un coche
  { path: 'detail/:id', component: CarDetailComponent },  // Ruta para los detalles de un coche
  { path: 'edit/:id', component: EditCarComponent },  // Ruta para editar un coche
  { path: '**', redirectTo: '' }  // Redirige a la página principal si no se encuentra la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
