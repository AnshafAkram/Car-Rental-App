import { Component } from '@angular/core';
import { CarBanner } from '../car-component/car-banner/car-banner';
import { CarSearch } from '../car-component/car-search/car-search';
import { CarFilter } from '../car-component/car-filter/car-filter';
import { CarCard } from '../car-component/car-card/car-card';
import { CarCta } from '../car-component/car-cta/car-cta';
import { Footer } from '../../../common/footer/footer';

@Component({
  selector: 'app-car-page',
  imports: [CarBanner,CarSearch,CarFilter,CarCard,CarCta,Footer],
  templateUrl: './car-page.html',
  styleUrl: './car-page.css',
})
export class CarPage {}
