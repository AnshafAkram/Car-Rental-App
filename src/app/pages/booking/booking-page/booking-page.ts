import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { BookingBanner } from '../booking-component/booking-banner/booking-banner';
import { Navbar } from '../../../common/navbar/navbar';
import { BookingForm } from '../booking-component/booking-form/booking-form';
import { BookingTerms } from '../booking-component/booking-terms/booking-terms';


import { Booking } from '../../../services/booking/booking.service';
import { VehicleService } from '../../../services/vehicle/vehicle.service';



@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [
    BookingBanner,
    Navbar,
    BookingForm,
    BookingTerms
  ],
  templateUrl: './booking-page.html',
  styleUrl: './booking-page.css',
})
export class BookingPage implements OnInit {



  vehicle:any;

  vehicleId!:number;




  constructor(

    private route: ActivatedRoute,

    private vehicleService: VehicleService,

    private bookingService: Booking,

    private router: Router

  ){}





  ngOnInit(): void {


    this.vehicleId = Number(
      this.route.snapshot.paramMap.get('vehicleId')
    );


    this.loadVehicle();


  }






  loadVehicle():void {


    this.vehicleService
    .getVehicleById(this.vehicleId)
    .subscribe({


      next:(data)=>{


        this.vehicle=data;


        console.log(
          "Selected vehicle:",
          this.vehicle
        );


      },


      error:(err)=>{


        console.error(
          "Vehicle loading failed",
          err
        );


      }


    });


  }






  createBooking(data:any):void {



    const booking = {



      startDate:data.startDate,


      endDate:data.endDate,



      vehicle:{


        id:this.vehicleId


      },



      user:{


        id:1


      }



    };






    this.bookingService
    .createBooking(booking)
    .subscribe({



      next:(response)=>{



        console.log(
          "Booking created:",
          response
        );



        alert(
          "Booking created. Proceed to payment."
        );



        // Redirect to payment page
        // using created booking id

        this.router.navigate([

          '/pay',

          response.id

        ]);



      },





      error:(err)=>{



        console.error(
          err
        );



        alert(
          "Booking failed"
        );



      }




    });




  }





}