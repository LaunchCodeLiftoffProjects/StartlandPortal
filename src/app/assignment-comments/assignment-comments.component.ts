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
  assignments: any;

  constructor(
    private router: ActivatedRoute, 
    private assignmentService: AssignmentService
  ) { }

  ngOnInit() {

    // I re-wrote the code here based on another version I found.
    this.router.paramMap.subscribe( params => {
      this.assignmentService.getSelectedAssignment(params.get('id'))
        .subscribe(
          data => {
            this.assignment = data;
          },
          err => {
            this.assignment = JSON.parse(err.error).message;
          }
        );
    })
  }

}
