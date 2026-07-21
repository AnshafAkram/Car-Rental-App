import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector:'app-payment-history',
  standalone:true,
  imports:[CommonModule, DatePipe],
  templateUrl:'./payment-history.html',
  styleUrl:'./payment-history.css'
})
export class PaymentHistory {


  @Input()
  payments:any[] = [];


}