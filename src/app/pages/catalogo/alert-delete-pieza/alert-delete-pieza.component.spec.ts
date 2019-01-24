import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeletePiezaComponent } from './alert-delete-pieza.component';

describe('AlertDeletePiezaComponent', () => {
  let component: AlertDeletePiezaComponent;
  let fixture: ComponentFixture<AlertDeletePiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDeletePiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeletePiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
