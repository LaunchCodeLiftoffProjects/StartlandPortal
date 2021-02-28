import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../_services/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.css']
})
export class SubmitAssignmentComponent implements OnInit {
  moduleNumber: any;
  currentUser: any;
  validLink: any;
  isValid = true;
  submitAssignmentForm: FormGroup;
  updateMode = false;
  submitted = false;
  thisAssignmentId: any;
  updateMessage = '';

  constructor(
    private router: ActivatedRoute,
    private token: TokenStorageService,
    private assignmentService: AssignmentService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    
    this.router.paramMap.subscribe( params => { this.moduleNumber = params.get('moduleNum') });

    this.submitAssignmentForm = this.formBuilder.group({
      name: this.currentUser.firstName + "'s Assignment",
      moduleNum: this.moduleNumber,
      link: [''],
      userId: this.currentUser.id
    });

    this.assignmentService.get(this.currentUser.id, this.moduleNumber)
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

    this.LinkCheck(this.submitAssignmentForm.value.link);

    if(this.isValid){
      this.assignmentService.create(
        this.submitAssignmentForm.value.name,
        this.submitAssignmentForm.value.moduleNum,
        this.validLink,
        this.submitAssignmentForm.value.userId)
        .subscribe(
          response => {
            console.log(response);
            this.reloadPage("Assignment was added successfully!")
          },
          error => {
            console.log(error);
          });
    }
    
  }

  updateAssignment(){
    this.updateMode = true;
  }

  submitNewAssignment(newLink: string){  
    
    this.LinkCheck(newLink);
    
    if (this.isValid){
      this.assignmentService.update(this.thisAssignmentId, this.validLink)
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

  LinkCheck(link: string){
  
    if (!(link.length > 0)){
      this.isValid = false;
    }
  
    let checkLink: RegExpMatchArray = link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  
    if (checkLink !== null){
      if (link.includes('http://') || link.includes('http://www.') || link.includes('https://') || link.includes('https://www.')){
        this.validLink = link;
        this.isValid = true;
      } 
      else {
        this.validLink = `http://${link}`;
        this.isValid = true;
      }
      
    }
    else{
      this.isValid = false;
    }
    
  }
}
