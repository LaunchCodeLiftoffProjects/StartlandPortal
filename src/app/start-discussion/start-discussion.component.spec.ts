import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDiscussionComponent } from './start-discussion.component';

describe('StartDiscussionComponent', () => {
  let component: StartDiscussionComponent;
  let fixture: ComponentFixture<StartDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
