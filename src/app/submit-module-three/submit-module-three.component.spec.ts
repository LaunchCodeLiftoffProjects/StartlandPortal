import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitModuleThreeComponent } from './submit-module-three.component';

describe('SubmitModuleThreeComponent', () => {
  let component: SubmitModuleThreeComponent;
  let fixture: ComponentFixture<SubmitModuleThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitModuleThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitModuleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
