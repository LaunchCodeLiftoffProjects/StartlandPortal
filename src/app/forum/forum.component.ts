import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../_services/assignment.service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  assignments: any;
  users: any;
  viewAssignmentId: any;

  constructor(
    private assignmentService: AssignmentService,
    private userService: UserService,
    private router: Router,
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
  }
}
