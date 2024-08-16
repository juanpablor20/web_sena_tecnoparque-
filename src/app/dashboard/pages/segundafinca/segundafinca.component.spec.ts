import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundafincaComponent } from './segundafinca.component';

describe('SegundafincaComponent', () => {
  let component: SegundafincaComponent;
  let fixture: ComponentFixture<SegundafincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundafincaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundafincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
