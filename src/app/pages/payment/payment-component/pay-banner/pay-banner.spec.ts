import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBanner } from './pay-banner';

describe('PayBanner', () => {
  let component: PayBanner;
  let fixture: ComponentFixture<PayBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(PayBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
