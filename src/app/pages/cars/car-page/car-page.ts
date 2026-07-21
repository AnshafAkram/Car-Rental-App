import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarBanner } from '../car-component/car-banner/car-banner';
import { CarSearch } from '../car-component/car-search/car-search';
import { CarFilter } from '../car-component/car-filter/car-filter';
import { CarCard } from '../car-component/car-card/car-card';
import { CarCta } from '../car-component/car-cta/car-cta';
import { Footer } from '../../../common/footer/footer';

import { VehicleService } from '../../../services/vehicle/vehicle.service';

@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [
    CommonModule,
    CarBanner,
    CarSearch,
    CarFilter,
    CarCard,
    CarCta,
    Footer
  ],
  templateUrl: './car-page.html',
  styleUrl: './car-page.css'
})
export class CarPage implements OnInit {

  vehicles: any[] = [];

  loading = false;

  loadError = '';

  constructor(
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {

    this.loadVehicles();

  }

  loadVehicles(): void {

    this.loading = true;

    this.loadError = '';

    this.vehicleService
      .getVehicles()
      .subscribe({

        next: (data: any) => {

          this.vehicles = data;

          console.log('Vehicles loaded:', this.vehicles);

          this.loading = false;

        },

        error: (error) => {

          console.error('Failed to load vehicles:', error);

          this.loadError = 'Unable to load vehicles';

          this.loading = false;

        }

      });

  }

}