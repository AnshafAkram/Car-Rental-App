import { Component } from '@angular/core';
import { BookingBanner } from '../booking-component/booking-banner/booking-banner';
import { Navbar } from '../../../common/navbar/navbar';
import { BookingForm } from '../booking-component/booking-form/booking-form';
import { BookingSummaryCard } from '../booking-component/booking-summary-card/booking-summary-card';
import { BookingTerms } from '../booking-component/booking-terms/booking-terms';

@Component({
  selector: 'app-booking-page',
  imports: [BookingBanner,Navbar,BookingForm,BookingSummaryCard,BookingTerms],
  templateUrl: './booking-page.html',
  styleUrl: './booking-page.css',
})
export class BookingPage {}
