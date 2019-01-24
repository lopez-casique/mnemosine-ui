import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaiComponent } from './oai.component';

describe('OaiComponent', () => {
  let component: OaiComponent;
  let fixture: ComponentFixture<OaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
