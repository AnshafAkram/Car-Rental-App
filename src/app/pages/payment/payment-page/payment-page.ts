import { Component } from '@angular/core';
import { PayBanner } from '../payment-component/pay-banner/pay-banner';
import { PaySummary } from '../payment-component/pay-summary/pay-summary';
import { PayNote } from '../payment-component/pay-note/pay-note';

@Component({
  selector: 'app-payment-page',
  imports: [PayBanner ,PaySummary,PayNote],
  templateUrl: './payment-page.html',
  styleUrl: './payment-page.css',
})
export class PaymentPage {}
