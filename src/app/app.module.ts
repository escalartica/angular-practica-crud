import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Material imports
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkMenuModule } from '@angular/cdk/menu';

// Importa componentes standalone
import { AppComponent } from './app.component';  // Standalone
import { CreateCarComponent } from './home/home/create-car/create-car.component';  // Standalone

// Importa componentes no standalone
import { CarDetailComponent } from './home/home/car-detail/car-detail.component';
import { EditCarComponent } from './home/home/edit-car/edit-car.component';
import { CrudTableComponent } from './home/home/crud-table/crud-table.component';

@NgModule({
  declarations: [
    CarDetailComponent,  // No standalone
    EditCarComponent,     // No standalone

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CdkMenuModule,
    HttpClientModule,
    RouterModule,
    AppComponent,  // Standalone
    CreateCarComponent,  // Standalone
    CrudTableComponent
  ],
  //bootstrap: [AppComponent]  // Inicia la aplicación con AppComponent
})
export class AppModule {}
