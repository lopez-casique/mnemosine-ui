import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubcoleccionesComponent } from './admin-subcolecciones.component';

describe('AdminSubcoleccionesComponent', () => {
  let component: AdminSubcoleccionesComponent;
  let fixture: ComponentFixture<AdminSubcoleccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubcoleccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubcoleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
