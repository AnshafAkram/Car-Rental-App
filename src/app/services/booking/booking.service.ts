import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Booking {


  private apiUrl = 'http://localhost:8080/api/bookings';



  constructor(
    private http: HttpClient
  ) {}



  // Create Booking

  createBooking(booking: any): Observable<any> {

    return this.http.post(
      this.apiUrl,
      booking
    );

  }




  // Get All Bookings

  getBookings(): Observable<any> {

    return this.http.get(
      this.apiUrl
    );

  }




  // Get Booking By ID

  getBookingById(id:number): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/${id}`
    );

  }





  // Update Booking Status

  updateStatus(
    id:number,
    status:string
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${id}/status?status=${status}`,
      {}
    );

  }





  // Delete Booking

  deleteBooking(id:number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );

  }

  getUserBookings(userId:number){

      return this.http.get(
        `${this.apiUrl}/user/${userId}`
      );

}

getMyBookings() {
  return this.http.get<any[]>(
    `${this.apiUrl}/my`
  );
}


}