import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOrganizacionComponent } from './add-edit-organizacion.component';

describe('AddEditOrganizacionComponent', () => {
  let component: AddEditOrganizacionComponent;
  let fixture: ComponentFixture<AddEditOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
