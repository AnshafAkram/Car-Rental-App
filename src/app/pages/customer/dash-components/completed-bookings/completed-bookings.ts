import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-completed-bookings',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './completed-bookings.html',
  styleUrl: './completed-bookings.css',
})
export class CompletedBookings {


  @Input()
  bookings:any[] = [];


}