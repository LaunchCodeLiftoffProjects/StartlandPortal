import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wildcard404Component } from './wildcard404.component';

describe('Wildcard404Component', () => {
  let component: Wildcard404Component;
  let fixture: ComponentFixture<Wildcard404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wildcard404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wildcard404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
