import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditColeccionComponent } from './add-edit-coleccion.component';

describe('AddEditColeccionComponent', () => {
  let component: AddEditColeccionComponent;
  let fixture: ComponentFixture<AddEditColeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditColeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
