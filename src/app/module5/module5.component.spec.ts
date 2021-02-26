import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module5Component } from './module5.component';

describe('Module5Component', () => {
  let component: Module5Component;
  let fixture: ComponentFixture<Module5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
