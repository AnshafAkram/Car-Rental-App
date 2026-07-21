import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Navbar } from '../../../common/navbar/navbar';
import { DetailBanner } from '../detail-component/detail-banner/detail-banner';
import { DetailShow } from '../detail-component/detail-show/detail-show';
import { DetailSpec } from '../detail-component/detail-spec/detail-spec';
import { DetailRentinfo } from '../detail-component/detail-rentinfo/detail-rentinfo';
import { Footer } from '../../../common/footer/footer';

import { VehicleService } from '../../../services/vehicle/vehicle.service';


@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    Navbar,
    DetailBanner,
    DetailShow,
    DetailSpec,
    DetailRentinfo,
    Footer
  ],
  templateUrl: './details-page.html',
  styleUrl: './details-page.css',
})
export class DetailsPage implements OnInit {


  vehicle: any;

  vehicleId!: number;



  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) {}



  ngOnInit(): void {


    this.vehicleId = Number(
      this.route.snapshot.paramMap.get('id')
    );


    this.loadVehicle();



  }




  loadVehicle(): void {


    this.vehicleService
      .getVehicleById(this.vehicleId)
      .subscribe({

        next: (data) => {

          this.vehicle = data;


          console.log(
            "Vehicle Details:",
            this.vehicle
          );


        },


        error: (error) => {


          console.error(
            "Failed to load vehicle",
            error
          );


        }


      });


  }



}