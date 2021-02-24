import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../_services/assignment.service';
import { CommentsService } from '../_services/comments.service';
import { TokenStorageService } from '../_services/token-storage.service'

@Component({
  selector: 'app-assignment-comments',
  templateUrl: './assignment-comments.component.html',
  styleUrls: ['./assignment-comments.component.css']
})
export class AssignmentCommentsComponent implements OnInit {
  assignmentId: any;
  assignment: any;
  assignments: any;
  commentsForm: FormGroup;
  submitted = false;
  updateMode = false;
  currentUser: any;

  constructor(
    private router: ActivatedRoute, 
    private assignmentService: AssignmentService,
    private commentsService: CommentsService,
    private formBuilder: FormBuilder,
    private token: TokenStorageService
  ) { }

  ngOnInit() {

    this.currentUser = this.token.getUser();

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

    this.router.paramMap.subscribe( params => {this.assignmentId = params.get('id')});

    // ORIGINAL VERSION. HAVEN'T TESTED - feel free to try it with this one instead!
    // this.assignmentId = Number(this.router.snapshot.paramMap.get("id?"));

    // console.log(typeof(this.assignmentId));

    // this.assignmentService.getSelectedAssignment(this.assignmentId)
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.assignment = data;
    //   },
    //   err => {
    //     this.assignment = JSON.parse(err.error).message;
    //   }
    // );

      console.log(this.assignmentId);
      console.log(this.currentUser);

    this.commentsForm = this.formBuilder.group({
      assignmentId: this.assignmentId,
      userId: this.currentUser.id,
      comment: ['']
    });

  }

  onFormSubmit(){
    this.commentsService.create(this.commentsForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  deleteComment(comment: any){
    this.commentsService.delete(comment.id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        }
      )
  }

  updateComment(){
    this.updateMode = true;
  }

  submitNewComment(comment: any, newContent: string){
    this.commentsService.update(comment.id, newContent)
      .subscribe(
        response => {
          console.log(response);
          this.updateMode = false;
          window.location.reload();
        },
        error => {
          console.log(error);
        });
      }

}
