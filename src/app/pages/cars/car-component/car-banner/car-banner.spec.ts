import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBanner } from './car-banner';

describe('CarBanner', () => {
  let component: CarBanner;
  let fixture: ComponentFixture<CarBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(CarBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
