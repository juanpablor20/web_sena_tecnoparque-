import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroorganismosComponent } from './microorganismos.component';

describe('MicroorganismosComponent', () => {
  let component: MicroorganismosComponent;
  let fixture: ComponentFixture<MicroorganismosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroorganismosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroorganismosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
