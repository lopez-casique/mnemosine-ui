import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditExposicionComponent } from './add-edit-exposicion.component';

describe('AddEditExposicionComponent', () => {
  let component: AddEditExposicionComponent;
  let fixture: ComponentFixture<AddEditExposicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditExposicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditExposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
