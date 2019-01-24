import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoInvestigacionComponent } from './edit-info-investigacion.component';

describe('EditInfoInvestigacionComponent', () => {
  let component: EditInfoInvestigacionComponent;
  let fixture: ComponentFixture<EditInfoInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInfoInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfoInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
