import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntosColeccionesComponent } from './conjuntos-colecciones.component';

describe('ConjuntosColeccionesComponent', () => {
  let component: ConjuntosColeccionesComponent;
  let fixture: ComponentFixture<ConjuntosColeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntosColeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntosColeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
