import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVehicle } from './manage-vehicle';

describe('ManageVehicle', () => {
  let component: ManageVehicle;
  let fixture: ComponentFixture<ManageVehicle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageVehicle],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageVehicle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
