import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-detail-spec',
  standalone: true,
  imports: [],
  templateUrl: './detail-spec.html',
  styleUrl: './detail-spec.css',
})
export class DetailSpec {


  @Input() vehicle: any;


}