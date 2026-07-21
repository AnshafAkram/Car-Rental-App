import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-active-booking',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './active-booking.html',
  styleUrl: './active-booking.css',
})
export class ActiveBooking {


  @Input()
  bookings: any[] = [];


}