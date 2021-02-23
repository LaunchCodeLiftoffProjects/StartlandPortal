import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitModuleFiveComponent } from './submit-module-five.component';

describe('SubmitModuleFiveComponent', () => {
  let component: SubmitModuleFiveComponent;
  let fixture: ComponentFixture<SubmitModuleFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitModuleFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitModuleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
