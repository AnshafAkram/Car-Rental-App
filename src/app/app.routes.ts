import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home-page/home-page';
import { CarPage } from './pages/cars/car-page/car-page';
import { DetailsPage } from './pages/details/details-page/details-page';
import { BookingPage } from './pages/booking/booking-page/booking-page';
import { PaymentPage } from './pages/payment/payment-page/payment-page';
import { Dashboard } from './pages/customer/dashboard/dashboard';
import { AdminPage } from './pages/admin/admin-page/admin-page';
import { LoginPage } from './pages/login/login-page/login-page';
import { RegisterPage } from './pages/register/register-page/register-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'cars', component: CarPage },
 { path: 'vehicle-details', component: DetailsPage},
  { path: 'bookings', component: BookingPage},
  { path: 'pay', component: PaymentPage},
  { path: 'dashboard', component: Dashboard},
   { path: 'admin', component: AdminPage},
    { path: 'login', component: LoginPage},
    { path: 'register', component: RegisterPage}
];