import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1SubmissionComponent } from './assignment1-submission.component';

describe('Assignment1SubmissionComponent', () => {
  let component: Assignment1SubmissionComponent;
  let fixture: ComponentFixture<Assignment1SubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment1SubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment1SubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
