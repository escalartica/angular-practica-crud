import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que las rutas estén correctamente configuradas

// Importa los módulos de Angular Material necesarios
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Si necesitas iconos
import { MatToolbarModule } from '@angular/material/toolbar'; // Si necesitas barras de herramientas
import { CdkMenuModule } from '@angular/cdk/menu';  

// Importa tus componentes
import { HomeComponent } from './home/home.component';
import { CrudTableComponent } from './home/home/crud-table/crud-table.component';
import { BreadcrumbComponent } from './home/home/breadcrumb/breadcrumb.component';
import { CreateCarComponent } from './home/home/create-car/create-car.component';
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule


@NgModule({
  declarations: [
   // Asegúrate de que el componente esté declarado
  
    CreateCarComponent,
    CarDetailComponent,
    EditCarComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    BrowserModule,
    AppRoutingModule, // Importa el módulo de rutas
    MatTableModule,    // Asegúrate de importar MatTableModule aquí
    MatButtonModule,   // Asegúrate de importar MatButtonModule aquí
    MatIconModule,     // Si usas iconos
    MatToolbarModule ,  // Si usas la barra de herramientas
    BrowserModule,
    AppRoutingModule,
    RouterModule,  // Asegúrate de importar RouterModule
    MatTableModule,
    MatButtonModule,
    BreadcrumbComponent,
    CdkMenuModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
})
export class AppModule {}
