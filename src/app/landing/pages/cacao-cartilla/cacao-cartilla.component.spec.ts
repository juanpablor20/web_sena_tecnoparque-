import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaoCartillaComponent } from './cacao-cartilla.component';

describe('CacaoCartillaComponent', () => {
  let component: CacaoCartillaComponent;
  let fixture: ComponentFixture<CacaoCartillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacaoCartillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacaoCartillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
