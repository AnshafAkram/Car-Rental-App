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

import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';


export const routes: Routes = [

  // =========================
  // PUBLIC PAGES
  // =========================

  {
    path: '',
    component: HomePage
  },

  {
    path: 'login',
    component: LoginPage
  },

  {
    path: 'register',
    component: RegisterPage
  },


  // =========================
  // VEHICLE PAGES
  // =========================

  {
    path: 'cars',
    component: CarPage
  },


  {
    path: 'vehicle-details/:id',
    component: DetailsPage
  },


  // =========================
  // CUSTOMER PROTECTED PAGES
  // =========================

  {
    path: 'bookings/:vehicleId',
    component: BookingPage,
    canActivate: [authGuard]
  },


  {
     path:'pay/:bookingId',
    component:PaymentPage,
    canActivate:[authGuard]
  },


  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },


  // =========================
  // ADMIN ONLY PAGE
  // =========================

  {
    path: 'admin',
    component: AdminPage,
    canActivate: [
      authGuard,
      roleGuard
    ]
  },


  // =========================
  // INVALID ROUTES
  // =========================

  {
    path: '**',
    redirectTo: ''
  }

];