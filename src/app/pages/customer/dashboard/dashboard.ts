import { Component } from '@angular/core';
import { DashHeader } from '../dash-components/dash-header/dash-header';
import { ActiveBooking } from '../dash-components/active-booking/active-booking';
import { CompletedBookings } from '../dash-components/completed-bookings/completed-bookings';
import { PaymentHistory } from '../dash-components/payment-history/payment-history';
import { Profile } from '../dash-components/profile/profile';

@Component({
  selector: 'app-dashboard',
  imports: [DashHeader,ActiveBooking,CompletedBookings,PaymentHistory,Profile],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
