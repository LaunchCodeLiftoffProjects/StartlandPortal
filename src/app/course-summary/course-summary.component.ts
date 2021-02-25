import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TokenStorageService } from '../_services/token-storage.service';
import { AssignmentService } from '../_services/assignment.service';

@Component({
  selector: 'app-course-summary',
  templateUrl: './course-summary.component.html',
  styleUrls: ['./course-summary.component.css']
})

export class CourseSummaryComponent {
  currentUser: any;
  assignments: any;

  modules = [1,2,3,4,5];
  submitted = [];
  currentdate = new Date();
  duedates = [
    new Date(2021, 0, 1), 
    new Date(2021, 1, 1),
    new Date(2021, 2, 1),
    new Date(2021, 3, 1),
    new Date(2021, 4, 1)
  ];

  displayedColumns = ['moduleNum', 'description', 'dueDate', 'status']
  dataSource = new MatTableDataSource(MODULE_DATA);

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

            if (this.submitted.length === this.modules[i] -1) {
              this.submitted.push(false);
            }

          }

          for (let i = 0; i < MODULE_DATA.length; i++) {
            if (this.submitted[i] === false) {
              MODULE_DATA[i].status = 'Not Complete';
            } else {
              MODULE_DATA[i].status = 'Completed';
            }
            
            if (this.currentdate.getTime() > this.duedates[i].getTime() && this.submitted[i] === false) {
              MODULE_DATA[i].status = 'Past Due'
            }
            
          }

        }
        ,
        err => {
          this.assignments = JSON.parse(err.error).message;
        }

      );

  }

}

export interface Module {
  moduleNum: number;
  description: string;
  dueDate: string;
  status: string;
}

const MODULE_DATA: Module[] = [
  {moduleNum: 1, description: 'Module 1', dueDate: 'January 1, 2021', status: ''},
  {moduleNum: 2, description: 'Module 2', dueDate: 'February 1, 2021', status: ''},
  {moduleNum: 3, description: 'Module 3', dueDate: 'March 1, 2021', status: ''},
  {moduleNum: 4, description: 'Module 4', dueDate: 'April 1, 2021', status: ''},
  {moduleNum: 5, description: 'Module 4', dueDate: 'May 1, 2021', status: ''}
];
