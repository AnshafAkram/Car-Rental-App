import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './car-card.html',
  styleUrls: ['./car-card.css']
})
export class CarCard {

  @Input() vehicle:any;

}