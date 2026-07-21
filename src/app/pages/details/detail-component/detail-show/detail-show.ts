import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detail-show',
  standalone:true,
  imports:[
    RouterLink
  ],
  templateUrl:'./detail-show.html',
  styleUrl:'./detail-show.css',
})
export class DetailShow {


  @Input() vehicleId!: number;

  @Input() vehicle: any;


}