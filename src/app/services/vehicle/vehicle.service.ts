import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {


  private apiUrl = 'http://localhost:8080/api/vehicles';



  constructor(
    private http: HttpClient
  ) {}



  // Get all vehicles

  getVehicles(): Observable<any> {

    return this.http.get(
      this.apiUrl
    );

  }



  // Get vehicle by id

  getVehicleById(id:number): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/${id}`
    );

  }



  // Add vehicle (Admin)

  addVehicle(vehicle:any): Observable<any> {

    return this.http.post(
      this.apiUrl,
      vehicle
    );

  }



  // Update vehicle (Admin)

  updateVehicle(id:number, vehicle:any): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${id}`,
      vehicle
    );

  }



  // Delete vehicle (Admin)

  deleteVehicle(id:number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );

  }

}