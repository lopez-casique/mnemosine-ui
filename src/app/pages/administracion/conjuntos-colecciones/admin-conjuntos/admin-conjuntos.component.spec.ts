import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConjuntosComponent } from './admin-conjuntos.component';

describe('AdminConjuntosComponent', () => {
  let component: AdminConjuntosComponent;
  let fixture: ComponentFixture<AdminConjuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConjuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
