
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Importa tu HomeComponent
import { CrudTableComponent } from './home/home/crud-table/crud-table.component';
import { CreateCarComponent } from './home/home/create-car/create-car.component';
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';


const routes: Routes = [
  { path: '', component: HomeComponent },  // Usar el HomeComponent como ruta inicial
  { path: '', component: CrudTableComponent },
  { path: 'create', component: CreateCarComponent },
  { path: 'detail/:id', component: CarDetailComponent },
  { path: 'edit/:id', component: EditCarComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas
  exports: [RouterModule]  // Asegúrate de exportarlo para que el enrutamiento funcione
})
export class AppRoutingModule {}
