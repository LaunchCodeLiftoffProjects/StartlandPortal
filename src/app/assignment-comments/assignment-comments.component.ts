import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../_services/assignment.service';
import { CommentsService } from '../_services/comments.service';
import { TokenStorageService } from '../_services/token-storage.service'
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-assignment-comments',
  templateUrl: './assignment-comments.component.html',
  styleUrls: ['./assignment-comments.component.css']
})
export class AssignmentCommentsComponent implements OnInit {
  assignmentId: any;
  assignment: any;
  assignments: any;
  assignmentLink: any;
  commentsForm: FormGroup;
  submitted = false;
  updateMode = false;
  currentUser: any;
  updateMessage = '';
  comments: any;
  users: any;

  constructor(
    private router: ActivatedRoute, 
    private assignmentService: AssignmentService,
    private commentsService: CommentsService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private token: TokenStorageService
  ) { }

  ngOnInit() {

    this.currentUser = this.token.getUser();

    this.router.paramMap.subscribe( params => {
      this.assignmentService.getSelectedAssignment(params.get('id'))
        .subscribe(
          data => {
            this.assignment = data;
            this.assignmentLink = Object(data).link
          },
          err => {
            this.assignment = JSON.parse(err.error).message;
          }
        );
    })

    this.router.paramMap.subscribe( params => {this.assignmentId = params.get('id')});

    this.commentsForm = this.formBuilder.group({
      assignmentId: this.assignmentId,
      userId: this.currentUser.id,
      content: ['']
    });

    this.commentsService.getAll()
    .subscribe(
      data => {
        this.comments = data;
      },
      err => {
        this.comments = JSON.parse(err.error).message;
      }
    );

    this.userService.getAll()
    .subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      err => {
        this.users = JSON.parse(err.error).message;
      }
    );

  }

  onFormSubmit(){
    this.commentsService.create(this.commentsForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          window.location.reload();
          // this.reloadPage("Comment was added successfully!")
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

  cancelUpdateComment(){
    this.updateMode = false;
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
