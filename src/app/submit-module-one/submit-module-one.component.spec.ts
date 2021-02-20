import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitModuleOneComponent } from './submit-module-one.component';

describe('SubmitModuleOneComponent', () => {
  let component: SubmitModuleOneComponent;
  let fixture: ComponentFixture<SubmitModuleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitModuleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitModuleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
