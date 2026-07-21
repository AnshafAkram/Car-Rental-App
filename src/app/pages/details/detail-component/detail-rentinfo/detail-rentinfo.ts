import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-detail-rentinfo',
  standalone: true,
  imports: [],
  templateUrl: './detail-rentinfo.html',
  styleUrl: './detail-rentinfo.css',
})
export class DetailRentinfo {


  @Input() vehicle: any;


}