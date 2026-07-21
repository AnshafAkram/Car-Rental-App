import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  private apiUrl =
  'http://localhost:8080/api/payments';



  constructor(
    private http: HttpClient
  ) {}



  // Get payments of logged user

  getPaymentsByUser(
    userId:number
  ):Observable<any[]> {


    return this.http.get<any[]>(
      `${this.apiUrl}/user/${userId}`
    );


  }



  // Create payment

  createPayment(
    payment:any
  ):Observable<any>{


    return this.http.post<any>(
      this.apiUrl,
      payment
    );


  }



  // Get all payments

  getAllPayments():Observable<any[]>{


    return this.http.get<any[]>(
      this.apiUrl
    );


  }


}