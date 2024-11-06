import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCoffeComponent } from './gallery-coffe.component';

describe('GalleryCoffeComponent', () => {
  let component: GalleryCoffeComponent;
  let fixture: ComponentFixture<GalleryCoffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryCoffeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
