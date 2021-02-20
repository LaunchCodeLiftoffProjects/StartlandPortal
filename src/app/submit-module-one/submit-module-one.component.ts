import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AssignmentService } from '../_services/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-module-one',
  templateUrl: './submit-module-one.component.html',
  styleUrls: ['./submit-module-one.component.css']
})
export class SubmitModuleOneComponent implements OnInit {
  currentUser: any;
  submitAssignmentForm: FormGroup;
  assignments: any;

  constructor(
    private token: TokenStorageService,
    private assignmentService: AssignmentService,
    private formBuilder: FormBuilder
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
        },
        error => {
          console.log(error);
        });
      }

      checkIfSubmitted(){
        for (let i = 0; i < this.assignments.length; i++) {
          if (this.assignments[i].userId === this.currentUser.id && this.assignments[i].moduleNum === 1) {
            return true;
          } else {
            return false;
          }
        }

      }

}