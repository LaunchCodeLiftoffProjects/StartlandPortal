import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitModuleTwoComponent } from './submit-module-two.component';

describe('SubmitModuleTwoComponent', () => {
  let component: SubmitModuleTwoComponent;
  let fixture: ComponentFixture<SubmitModuleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitModuleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitModuleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
