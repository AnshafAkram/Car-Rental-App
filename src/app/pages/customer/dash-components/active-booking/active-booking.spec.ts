import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBooking } from './active-booking';

describe('ActiveBooking', () => {
  let component: ActiveBooking;
  let fixture: ComponentFixture<ActiveBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveBooking],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveBooking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
