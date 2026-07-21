import { Component, OnInit } from '@angular/core';

import { DashHeader } from '../dash-components/dash-header/dash-header';
import { ActiveBooking } from '../dash-components/active-booking/active-booking';
import { CompletedBookings } from '../dash-components/completed-bookings/completed-bookings';
import { PaymentHistory } from '../dash-components/payment-history/payment-history';
import { Profile } from '../dash-components/profile/profile';

import { Booking } from '../../../services/booking/booking.service';
import { PaymentService } from '../../../services/payment/payment.service';
import { Navbar } from '../../../common/navbar/navbar';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashHeader,
    ActiveBooking,
    CompletedBookings,
    PaymentHistory,
    Profile
    ,
    Navbar
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {


  bookings:any[] = [];

  activeBookings:any[] = [];

  completedBookings:any[] = [];

  payments:any[] = [];



  constructor(

    private bookingService: Booking,

    private paymentService: PaymentService

  ) {}




  ngOnInit(): void {


    this.loadBookings();


    this.loadPayments();


  }





  // =========================
  // LOAD USER BOOKINGS
  // =========================

  loadBookings():void {


    this.bookingService
    .getMyBookings()
    .subscribe({


      next:(data:any[])=>{


        this.bookings = data;



        this.activeBookings =
        this.bookings.filter(

          booking =>
          booking.status === 'PENDING'
          ||
          booking.status === 'CONFIRMED'

        );



        this.completedBookings =
        this.bookings.filter(

          booking =>
          booking.status === 'COMPLETED'

        );



        console.log(
          "User Bookings:",
          this.bookings
        );


      },



      error:(err)=>{


        console.error(
          "Failed to load bookings",
          err
        );


      }


    });


  }







  // =========================
  // LOAD USER PAYMENTS
  // =========================

  loadPayments():void {


    this.paymentService
    .getPaymentsByUser(1)
    .subscribe({


      next:(data:any[])=>{


        this.payments = data;



        console.log(
          "User Payments:",
          this.payments
        );


      },


      error:(err)=>{


        console.error(
          "Failed to load payments",
          err
        );


      }


    });


  }



}