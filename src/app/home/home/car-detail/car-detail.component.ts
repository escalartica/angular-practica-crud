import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../services/cars.service';
import { Car } from '../../../models/car.model';  // Importa la interfaz Car

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;  // Usamos la interfaz Car para tipar la propiedad `car`

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    const carId = Number(this.route.snapshot.paramMap.get('id'));
    if (carId) {
      this.getCarDetails(carId);
    }
  }

  getCarDetails(id: number): void {
    this.carService.getCarById(id).subscribe((car: Car) => {
      this.car = car;
    });
  }
}
