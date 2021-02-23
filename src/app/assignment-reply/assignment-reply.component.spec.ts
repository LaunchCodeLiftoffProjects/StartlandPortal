import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentReplyComponent } from './assignment-reply.component';

describe('AssignmentReplyComponent', () => {
  let component: AssignmentReplyComponent;
  let fixture: ComponentFixture<AssignmentReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
