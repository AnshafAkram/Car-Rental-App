import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpec } from './detail-spec';

describe('DetailSpec', () => {
  let component: DetailSpec;
  let fixture: ComponentFixture<DetailSpec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailSpec],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSpec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
