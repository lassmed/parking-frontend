import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingsAdminComponent } from './parkings-admin.component';

describe('ParkingsAdminComponent', () => {
  let component: ParkingsAdminComponent;
  let fixture: ComponentFixture<ParkingsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingsAdminComponent]
    });
    fixture = TestBed.createComponent(ParkingsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
