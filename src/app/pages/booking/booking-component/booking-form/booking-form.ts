import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BookingSummaryCard } from '../booking-summary-card/booking-summary-card';


@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    FormsModule,
    BookingSummaryCard
  ],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm {


  startDate: string = '';

  endDate: string = '';



  @Output() bookingSubmit = new EventEmitter<any>();




  submitBooking(): void {


    if(!this.startDate || !this.endDate){

      alert(
        "Please select pickup and return dates"
      );

      return;

    }



    this.bookingSubmit.emit({

      startDate: this.startDate,

      endDate: this.endDate

    });


  }



}