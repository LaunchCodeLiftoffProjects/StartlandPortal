import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AssignmentService } from '../_services/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-module-one',
  templateUrl: './submit-module-one.component.html',
  styleUrls: ['./submit-module-one.component.css']
})
export class SubmitModuleOneComponent implements OnInit {
  currentUser: any;
  submitAssignmentForm: FormGroup;
  assignments: any;
  updateMode = false;
  submitted = false;
  thisAssignment: any;
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
      name: "Module 1 Assignment",
      moduleNum: 1,
      link: [''],
      userId: this.currentUser.id
    });

    this.assignmentService.getAll()
      .subscribe(
        data => {
          this.assignments = data;
          for (let i = 0; i < this.assignments.length; i++) {
            if (this.assignments[i].userId === this.currentUser.id && this.assignments[i].moduleNum === 1) {
              this.submitted = true;
              this.thisAssignment = this.assignments[i];
            } else {
              this.submitted = false;
            }
          }
        },
        err => {
          this.assignments = JSON.parse(err.error).message;
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
        this.assignmentService.update(this.thisAssignment.id, newLink)
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
            this.assignmentService.delete(this.thisAssignment.id)
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