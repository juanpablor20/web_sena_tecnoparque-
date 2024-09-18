import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSoftwareComponent } from './detalles-software.component';

describe('DetallesSoftwareComponent', () => {
  let component: DetallesSoftwareComponent;
  let fixture: ComponentFixture<DetallesSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
