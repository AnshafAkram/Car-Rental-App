import { Component } from '@angular/core';
import { Navbar } from '../../../common/navbar/navbar';
import { DetailBanner } from '../detail-component/detail-banner/detail-banner';
import { DetailShow } from '../detail-component/detail-show/detail-show';
import { DetailSpec } from '../detail-component/detail-spec/detail-spec';
import { DetailRentinfo } from '../detail-component/detail-rentinfo/detail-rentinfo';
import { Footer } from '../../../common/footer/footer';

@Component({
  selector: 'app-details-page',
  imports: [Navbar,DetailBanner,DetailShow,DetailSpec,DetailRentinfo,Footer],
  templateUrl: './details-page.html',
  styleUrl: './details-page.css',
})
export class DetailsPage {}
