import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAssignmentComponent } from './submit-assignment.component';

describe('SubmitAssignmentComponent', () => {
  let component: SubmitAssignmentComponent;
  let fixture: ComponentFixture<SubmitAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
