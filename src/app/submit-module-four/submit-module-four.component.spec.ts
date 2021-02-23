import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitModuleFourComponent } from './submit-module-four.component';

describe('SubmitModuleFourComponent', () => {
  let component: SubmitModuleFourComponent;
  let fixture: ComponentFixture<SubmitModuleFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitModuleFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitModuleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
