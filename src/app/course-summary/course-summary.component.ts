import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-course-summary',
  templateUrl: './course-summary.component.html',
  styleUrls: ['./course-summary.component.css']
})

export class CourseSummaryComponent {
  displayedColumns = ['moduleNum', 'description', 'dueDate', 'status']
  dataSource = new MatTableDataSource(MODULE_DATA);
}

export interface Module {
  moduleNum: number;
  description: string;
  dueDate: string;
  status: string;
}

const MODULE_DATA: Module[] = [
  {moduleNum: 1, description: 'Module 1', dueDate: 'January 1, 2021', status: 'Past Due'},
  {moduleNum: 2, description: 'Module 2', dueDate: 'February 1, 2021', status: 'Completed'},
  {moduleNum: 3, description: 'Module 3', dueDate: 'March 1, 2021', status: 'Not Complete'},
  {moduleNum: 4, description: 'Module 4', dueDate: 'April 1, 2021', status: 'Not Complete'}
];
