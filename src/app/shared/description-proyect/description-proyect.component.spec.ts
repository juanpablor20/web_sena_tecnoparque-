import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProyectComponent } from './description-proyect.component';

describe('DescriptionProyectComponent', () => {
  let component: DescriptionProyectComponent;
  let fixture: ComponentFixture<DescriptionProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionProyectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
