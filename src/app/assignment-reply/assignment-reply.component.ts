import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { ReplyService } from '../_services/reply.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssignmentService } from '../_services/assignment.service';

@Component({
  selector: 'app-assignment-reply',
  templateUrl: './assignment-reply.component.html',
  styleUrls: ['./assignment-reply.component.css']
})
export class AssignmentReplyComponent implements OnInit {
  currentUser: any;
  currentAssignment: any;
  replyForm: FormGroup;
  replies: any;
  updateMode = false;
  submitted = false;

  constructor(
    private assignment: AssignmentService,
    private replyService: ReplyService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.currentAssignment = this.assignment.get(this.currentUser.id, moduleNum);
    this.replyForm = this.formBuilder.group({
      assignmentId: this.currentAssignment.id,
      userId: this.currentUser.id,
      content: ['']
    });
    this.replyService.getAll()
      .subscribe(
        data => {
          this.replies = data;
        },
        err => {
          this.replies = JSON.parse(err.error).message;
        }
      );
  }
    
    onFormSubmit(){
      this.replyService.create(this.replyForm.value)
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

    deleteReply(reply: any){
      this.replyService.delete(reply.id)
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

    updateReply(){
      this.updateMode = true;
    }

    submitNewReply (reply: any, newContent: string){
      this.replyService.update(reply.id, newContent)
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

