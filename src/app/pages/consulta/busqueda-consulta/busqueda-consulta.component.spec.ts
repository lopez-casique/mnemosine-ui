import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaConsultaComponent } from './busqueda-consulta.component';

describe('BusquedaConsultaComponent', () => {
  let component: BusquedaConsultaComponent;
  let fixture: ComponentFixture<BusquedaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
