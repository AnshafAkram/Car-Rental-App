import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayNote } from './pay-note';

describe('PayNote', () => {
  let component: PayNote;
  let fixture: ComponentFixture<PayNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayNote],
    }).compileComponents();

    fixture = TestBed.createComponent(PayNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
