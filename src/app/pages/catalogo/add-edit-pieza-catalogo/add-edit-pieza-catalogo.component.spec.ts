import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPiezaCatalogoComponent } from './add-edit-pieza-catalogo.component';

describe('AddEditPiezaCatalogoComponent', () => {
  let component: AddEditPiezaCatalogoComponent;
  let fixture: ComponentFixture<AddEditPiezaCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPiezaCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPiezaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
