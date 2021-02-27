import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../_services/assignment.service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { CommentsService } from '../_services/comments.service'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  assignments: any;
  users: any;
  viewAssignmentId: any;
  comments: any;
  numberOfComments: any;

  constructor(
    private assignmentService: AssignmentService,
    private userService: UserService,
    private router: Router,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.assignmentService.getAll()
      .subscribe(
        data => {
          this.assignments = data;
        },
        err => {
          this.assignments = JSON.parse(err.error).message;
        }
      );

    this.userService.getAll()
    .subscribe(
      data => {
        this.users = data;
      },
      err => {
        this.users = JSON.parse(err.error).message;
      }
    );

    this.commentsService.getAll()
    .subscribe(
      data => {
        this.comments = data;
      },
      err => {
        this.comments = JSON.parse(err.error).message;
      }
    )

    this.commentsService.getAll()
    .subscribe(
      data => {
        this.numberOfComments = Object(data).length;
      },
      err => {
        this.numberOfComments = JSON.parse(err.error).message;
      }
    )

  }

  commentCount(assignmentId: Number) {
    let count = 0;
    for (let i = 0; i < this.numberOfComments; i++){
      if (this.comments[i].assignmentId === assignmentId) {
        count += 1
      }
    }
    return count;
  }
  
}
