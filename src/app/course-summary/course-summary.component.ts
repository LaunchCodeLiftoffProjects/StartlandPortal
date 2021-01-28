import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course-summary',
  templateUrl: './course-summary.component.html',
  styleUrls: ['./course-summary.component.css']
})
export class CourseSummaryComponent implements OnInit {
  tableDataSrc: any;
  tableCols: string[] = ['assignment', 'dueData', 'status'];
  tableData: {}[] = [
    {
      assignment: 'Module #1',
      dueData: 'January 1st, 2021',
      status: 'Past Due'
    },
    {
      assignment: 'Module #2',
      dueData: 'February 1st, 2021',
      status: 'Completed'
    },
    {
      assignment: 'Module #1',
      dueData: 'March 1st, 2021',
      status: 'Not Complete'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
  }

}
