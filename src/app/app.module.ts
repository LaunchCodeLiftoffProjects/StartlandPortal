import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseSummaryComponent } from './course-summary/course-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
