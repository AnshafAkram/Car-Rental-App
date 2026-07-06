import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShow } from './detail-show';

describe('DetailShow', () => {
  let component: DetailShow;
  let fixture: ComponentFixture<DetailShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailShow],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
