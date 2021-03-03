import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AssignmentService } from '../_services/assignment.service';
import { CourseSummaryComponent} from '../course-summary/course-summary.component';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  currentUser: any;
  assignments: any;
  module: any;

  modules = [1,2,3,4];
  submitted = [];
  completed = this.submitted.length;

  constructor(
    private token: TokenStorageService,
    private assignmentService: AssignmentService,
    private moduleNum: CourseSummaryComponent
  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();

    this.module = this.moduleNum;

    this.assignmentService.getAll()
      .subscribe(
        data => {
          this.assignments = data;

          for (let i = 0; i < this.modules.length; i++) {

            for (let a = 0; a < Object(data).length; a++) {

              if (Object(data)[a].module === this.modules[i] && Object(data)[a].userId === this.currentUser.id) {
                this.submitted.push(true);
              }

            }

          }

        })


    }
  }
