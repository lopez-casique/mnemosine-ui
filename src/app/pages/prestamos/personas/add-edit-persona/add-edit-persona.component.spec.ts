import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersonaComponent } from './add-edit-persona.component';

describe('AddEditPersonaComponent', () => {
  let component: AddEditPersonaComponent;
  let fixture: ComponentFixture<AddEditPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
