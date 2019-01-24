import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorObjetosDigitalesComponent } from './visor-objetos-digitales.component';

describe('VisorObjetosDigitalesComponent', () => {
  let component: VisorObjetosDigitalesComponent;
  let fixture: ComponentFixture<VisorObjetosDigitalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorObjetosDigitalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorObjetosDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
