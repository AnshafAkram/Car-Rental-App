import { Component } from '@angular/core';
import { AdminHeader } from '../admin-components/admin-header/admin-header';
import { ManageVehicle } from '../admin-components/manage-vehicle/manage-vehicle';
import { AddVehicle } from '../admin-components/add-vehicle/add-vehicle';
import { ManageBooking } from '../admin-components/manage-booking/manage-booking';
import { ManageCustomer } from '../admin-components/manage-customer/manage-customer';
import { Navbar } from '../../../common/navbar/navbar';

@Component({
  selector: 'app-admin-page',
  imports: [AdminHeader,ManageVehicle,AddVehicle,ManageBooking,ManageCustomer,Navbar],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {}
