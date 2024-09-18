import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosInvestigacionComponent } from './resultados-investigacion.component';

describe('ResultadosInvestigacionComponent', () => {
  let component: ResultadosInvestigacionComponent;
  let fixture: ComponentFixture<ResultadosInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosInvestigacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
