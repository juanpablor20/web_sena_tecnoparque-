import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeMetodologyComponent } from './coffe-metodology.component';

describe('CoffeMetodologyComponent', () => {
  let component: CoffeMetodologyComponent;
  let fixture: ComponentFixture<CoffeMetodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeMetodologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeMetodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
