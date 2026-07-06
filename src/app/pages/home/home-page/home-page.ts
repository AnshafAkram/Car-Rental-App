import { Component } from '@angular/core';


import { Navbar } from '../../../common/navbar/navbar';
import { Footer } from '../../../common/footer/footer';

import { Section1 } from '../home-component/section1/section1';
import { Section2 } from '../home-component/section2/section2';
import { Section3 } from '../home-component/section3/section3';
import { Section4 } from '../home-component/section4/section4';

@Component({
  selector: 'app-home-page',
  imports: [Navbar, Section1, Section2, Section3, Section4, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
