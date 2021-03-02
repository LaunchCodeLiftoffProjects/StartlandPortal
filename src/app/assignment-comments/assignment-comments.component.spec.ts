import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCommentsComponent } from './assignment-comments.component';

describe('AssignmentCommentsComponent', () => {
  let component: AssignmentCommentsComponent;
  let fixture: ComponentFixture<AssignmentCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
