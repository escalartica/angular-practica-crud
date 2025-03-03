import { TestBed } from '@angular/core/testing';
import { CarService } from './cars.service';  // Cambiar a 'CarService' en lugar de 'CarsService'

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
