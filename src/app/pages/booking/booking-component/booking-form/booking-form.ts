import { Component } from '@angular/core';
import { BookingSummaryCard } from '../booking-summary-card/booking-summary-card';

@Component({
  selector: 'app-booking-form',
  imports: [BookingSummaryCard],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm {}
