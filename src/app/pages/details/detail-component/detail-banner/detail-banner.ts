import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detail-banner',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './detail-banner.html',
  styleUrl: './detail-banner.css',
})
export class DetailBanner {


  @Input() vehicle: any;


}