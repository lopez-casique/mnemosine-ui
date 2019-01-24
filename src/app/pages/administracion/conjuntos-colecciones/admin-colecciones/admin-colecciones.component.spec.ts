import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColeccionesComponent } from './admin-colecciones.component';

describe('AdminColeccionesComponent', () => {
  let component: AdminColeccionesComponent;
  let fixture: ComponentFixture<AdminColeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminColeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminColeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
