import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerafincaComponent } from './primerafinca.component';

describe('PrimerafincaComponent', () => {
  let component: PrimerafincaComponent;
  let fixture: ComponentFixture<PrimerafincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerafincaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerafincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
