import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment1-submission',
  templateUrl: './assignment1-submission.component.html',
  styleUrls: ['./assignment1-submission.component.css']
})
export class Assignment1SubmissionComponent implements OnInit {

  assignment1Form: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.assignment1Form = this.formBuilder.group({
      link: ['submit/assignment1', [Validators.required]]
      });
  }

  get fval() { return this.assignment1Form.controls; }

  onFormSubmit(){
    this.submitted = true;

    if (this.assignment1Form.invalid){
      return;
    }

    //else submit link to the database, including userId, moduleId, submissionId, & link to assignment
  }

}
