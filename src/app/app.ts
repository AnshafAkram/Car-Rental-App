import { Component, signal } from '@angular/core';
import { Navbar } from './common/navbar/navbar';
import { Section1, } from './common/section1/section1';
import { Section2, } from './common/section2/section2';
import { Section3, } from './common/section3/section3';
import { Section4, } from './common/section4/section4';
import { Footer, } from './common/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Section1,Navbar,Section2,Section3,Section4,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Car_Rent_App');
}
