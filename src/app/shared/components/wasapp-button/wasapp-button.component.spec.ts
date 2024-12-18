import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasappButtonComponent } from './wasapp-button.component';

describe('WasappButtonComponent', () => {
  let component: WasappButtonComponent;
  let fixture: ComponentFixture<WasappButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasappButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasappButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
