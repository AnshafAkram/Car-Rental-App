import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTerms } from './booking-terms';

describe('BookingTerms', () => {
  let component: BookingTerms;
  let fixture: ComponentFixture<BookingTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTerms],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingTerms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
