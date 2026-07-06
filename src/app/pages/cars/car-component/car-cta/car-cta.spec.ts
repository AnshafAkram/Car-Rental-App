import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCta } from './car-cta';

describe('CarCta', () => {
  let component: CarCta;
  let fixture: ComponentFixture<CarCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarCta],
    }).compileComponents();

    fixture = TestBed.createComponent(CarCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
