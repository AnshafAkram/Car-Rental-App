import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home-page/home-page';
import { CarPage } from './pages/cars/car-page/car-page';
import { DetailsPage } from './pages/details/details-page/details-page';
import { BookingPage } from './pages/booking/booking-page/booking-page';
import { PaymentPage } from './pages/payment/payment-page/payment-page';
import { Dashboard } from './pages/customer/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'cars', component: CarPage },
 { path: 'vehicle-details', component: DetailsPage},
  { path: 'bookings', component: BookingPage},
  { path: 'pay', component: PaymentPage},
  { path: 'dashboard', component: Dashboard}
];