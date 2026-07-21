import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PayBanner } from '../payment-component/pay-banner/pay-banner';
import { PaySummary } from '../payment-component/pay-summary/pay-summary';
import { PayNote } from '../payment-component/pay-note/pay-note';

import { PaymentService } from '../../../services/payment/payment.service';



@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    PayBanner,
    PaySummary,
    PayNote
  ],
  templateUrl: './payment-page.html',
  styleUrl: './payment-page.css',
})
export class PaymentPage implements OnInit {


  bookingId!: number;



  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router
  ) {}



  ngOnInit(): void {


    this.bookingId = Number(

      this.route.snapshot.paramMap.get('bookingId')

    );


    console.log(
      "Booking ID for payment:",
      this.bookingId
    );


  }




  makePayment(data:any):void {


    const payment = {


      paymentMethod: data.paymentMethod,


      booking: {

        id: this.bookingId

      }


    };



    this.paymentService
    .createPayment(payment)
    .subscribe({


      next:(response)=>{


        console.log(
          "Payment successful",
          response
        );


        alert(
          "Payment completed successfully"
        );


        this.router.navigate([
          '/dashboard'
        ]);


      },


      error:(error)=>{


        console.error(
          "Payment failed",
          error
        );


        alert(
          "Payment failed"
        );


      }


    });


  }



}