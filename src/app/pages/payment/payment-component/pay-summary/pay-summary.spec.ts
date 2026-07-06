import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySummary } from './pay-summary';

describe('PaySummary', () => {
  let component: PaySummary;
  let fixture: ComponentFixture<PaySummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaySummary],
    }).compileComponents();

    fixture = TestBed.createComponent(PaySummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
