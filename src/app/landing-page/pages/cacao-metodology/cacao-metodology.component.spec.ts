import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaoMetodologyComponent } from './cacao-metodology.component';

describe('CacaoMetodologyComponent', () => {
  let component: CacaoMetodologyComponent;
  let fixture: ComponentFixture<CacaoMetodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacaoMetodologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacaoMetodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
