import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInvestigacionComponent } from './busqueda-investigacion.component';

describe('BusquedaInvestigacionComponent', () => {
  let component: BusquedaInvestigacionComponent;
  let fixture: ComponentFixture<BusquedaInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
