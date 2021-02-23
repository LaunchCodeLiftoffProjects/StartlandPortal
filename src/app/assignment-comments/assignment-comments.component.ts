import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../_services/assignment.service';


@Component({
  selector: 'app-assignment-comments',
  templateUrl: './assignment-comments.component.html',
  styleUrls: ['./assignment-comments.component.css']
})
export class AssignmentCommentsComponent implements OnInit {
  assignmentId: any;
  assignment: any;

  constructor(
    private router: ActivatedRoute, 
    private assignmentService: AssignmentService
  ) { }

  ngOnInit() {
    this.assignmentId = this.router.snapshot.paramMap.get("id?");

    this.assignmentService.getSelectedAssignment(Number(this.assignmentId))
    .subscribe(
      data => {
        console.log(data)
        this.assignment = data;
      },
      err => {
        this.assignment = JSON.parse(err.error).message;
      }
    );
  }

}
