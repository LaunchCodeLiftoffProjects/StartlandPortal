import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AssignmentService } from '../_services/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-module-three',
  templateUrl: './submit-module-three.component.html',
  styleUrls: ['./submit-module-three.component.css']
})
export class SubmitModuleThreeComponent implements OnInit {
  currentUser: any;
  submitAssignmentForm: FormGroup;
  updateMode = false;
  submitted = false;
  thisAssignmentId: any;
  updateMessage = '';

  constructor(
    private token: TokenStorageService,
    private assignmentService: AssignmentService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.submitAssignmentForm = this.formBuilder.group({
      name: this.currentUser.username + "'s Assignment",
      moduleNum: 3,
      link: [''],
      userId: this.currentUser.id
    });

    this.assignmentService.get(this.currentUser.id, 3)
    .subscribe(
      data => {
        if (data[0]) {
          this.thisAssignmentId = data[0].id;
          this.submitted = true;
        } else {
          this.thisAssignmentId = "not submitted";
          this.submitted = false;
        }
      },
      err => {
        this.thisAssignmentId = JSON.parse(err.error).message;
      }
    );
  }

  onFormSubmit(){
    this.assignmentService.create(this.submitAssignmentForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.reloadPage("Assignment was added successfully!")
        },
        error => {
          console.log(error);
        });
      }

      updateAssignment(){
        this.updateMode = true;
      }

      submitNewAssignment(newLink: string){  
        this.assignmentService.update(this.thisAssignmentId, newLink)
          .subscribe(
            response => {
              console.log(response);
              this.updateMode = false;
              this.reloadPage("Assignment was updated successfully!")
            },
            error => {
              console.log(error);
            });
          }

          deleteAssignment(){
            this.assignmentService.delete(this.thisAssignmentId)
              .subscribe(
                response => {
                  console.log(response);
                  this.reloadPage("Assignment was deleted successfully!")
                },
                error => {
                  console.log(error);
                }
              )
          }

          reloadPage(message: string) {
            window.location.reload();
            this.updateMessage = message;
          }

}