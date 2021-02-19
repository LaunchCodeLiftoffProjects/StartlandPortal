import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AssignmentService } from '../_services/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start-discussion',
  templateUrl: './start-discussion.component.html',
  styleUrls: ['./start-discussion.component.css']
})
export class StartDiscussionComponent implements OnInit {
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

}
