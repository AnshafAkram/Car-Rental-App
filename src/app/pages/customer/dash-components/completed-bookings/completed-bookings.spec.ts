import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedBookings } from './completed-bookings';

describe('CompletedBookings', () => {
  let component: CompletedBookings;
  let fixture: ComponentFixture<CompletedBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedBookings],
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedBookings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
