import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRentinfo } from './detail-rentinfo';

describe('DetailRentinfo', () => {
  let component: DetailRentinfo;
  let fixture: ComponentFixture<DetailRentinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRentinfo],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailRentinfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
