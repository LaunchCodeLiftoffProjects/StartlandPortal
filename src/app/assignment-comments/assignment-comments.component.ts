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
  submissionLink: string;
  validLink = false;

  constructor(
    private router: ActivatedRoute, 
    private assignmentService: AssignmentService
  ) { }

  ngOnInit() {

    this.router.paramMap.subscribe( params => {
      this.assignmentService.getSelectedAssignment(params.get('id'))
        .subscribe(
          data => {
            this.assignment = data;
            this.PassLinkTest(this.assignment.link);
          },
          err => {
            this.assignment = JSON.parse(err.error).message;
          }
        );
    })


  }

  PassLinkTest(link: string){

    const err: string = 'Not a valid link';
  
    if (!(link.length > 0)){
      this.submissionLink = err;
    }
  
    let checkLink: RegExpMatchArray = link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  
    if (checkLink !== null){
      if (link.includes('http://') || link.includes('http://www.')){
        this.submissionLink = link;
      } 
      else {
        this.submissionLink = `http://${link}`;
      }
      
    }
    else{
      this.submissionLink = err;
    }
    
    if (this.submissionLink === err){
      this.validLink = false;
    }
    if (this.submissionLink !== err){
      this.validLink = true;
    };
  }

}
