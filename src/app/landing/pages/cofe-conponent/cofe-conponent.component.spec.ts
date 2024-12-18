import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeConponentComponent } from './cofe-conponent.component';

describe('CofeConponentComponent', () => {
  let component: CofeConponentComponent;
  let fixture: ComponentFixture<CofeConponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CofeConponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofeConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
