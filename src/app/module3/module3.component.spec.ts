import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3Component } from './module3.component';

describe('Module3Component', () => {
  let component: Module3Component;
  let fixture: ComponentFixture<Module3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
