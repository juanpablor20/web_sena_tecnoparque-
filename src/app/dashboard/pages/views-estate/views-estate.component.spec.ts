import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsEstateComponent } from './views-estate.component';

describe('ViewsEstateComponent', () => {
  let component: ViewsEstateComponent;
  let fixture: ComponentFixture<ViewsEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsEstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
