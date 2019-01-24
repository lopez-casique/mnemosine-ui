import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreservacionDigitalComponent } from './preservacion-digital.component';

describe('PreservacionDigitalComponent', () => {
  let component: PreservacionDigitalComponent;
  let fixture: ComponentFixture<PreservacionDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreservacionDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreservacionDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
