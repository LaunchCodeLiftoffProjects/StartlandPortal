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

  modules = [1,2,3,4];
  submitted = [];
  completed: number;

  constructor(
    private token: TokenStorageService,
    private assignmentService: AssignmentService

  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();

    this.assignmentService.getAll()
      .subscribe(
        data => {
          this.assignments = data;

          for (let i = 0; i < this.modules.length; i++) {

            for (let a = 0; a < Object(data).length; a++) {

              if (Object(data)[a].moduleNum === this.modules[i] && Object(data)[a].userId === this.currentUser.id) {
                this.submitted.push(true);
              }

            }

          }
          this.completed=this.submitted.length;
        })

        console.log(this.submitted);
        console.log(this.completed);

    }
  }
