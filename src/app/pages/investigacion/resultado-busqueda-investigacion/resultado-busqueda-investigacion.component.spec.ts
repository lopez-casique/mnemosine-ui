import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaInvestigacionComponent } from './resultado-busqueda-investigacion.component';

describe('ResultadoBusquedaInvestigacionComponent', () => {
  let component: ResultadoBusquedaInvestigacionComponent;
  let fixture: ComponentFixture<ResultadoBusquedaInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBusquedaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
