import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de importar las rutas
import { HomeComponent } from './home/home.component'; 
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';
import { CreateCarComponent } from './home/home/create-car/create-car.component'; // Asegúrate de importar CreateCarComponent
import { CrudTableComponent } from './home/home/crud-table/crud-table.component'; // Asegúrate de importar CrudTableComponent
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCarComponent,
    CrudTableComponent,
    CarDetailComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Módulo de enrutamiento
    FormsModule,
    CommonModule,
    RouterModule
  ],
  bootstrap: [AppComponent]  // Define AppComponent en bootstrap
})
export class AppModule { }
