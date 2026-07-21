import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pay-summary',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './pay-summary.html',
  styleUrl: './pay-summary.css',
})
export class PaySummary {


  paymentMethod: string = 'CARD';



  @Output() paymentSubmit = new EventEmitter<any>();




  submitPayment(): void {


    this.paymentSubmit.emit({

      paymentMethod: this.paymentMethod

    });


  }



}