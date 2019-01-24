import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConjuntoComponent } from './add-edit-conjunto.component';

describe('AddEditConjuntoComponent', () => {
  let component: AddEditConjuntoComponent;
  let fixture: ComponentFixture<AddEditConjuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditConjuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditConjuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
