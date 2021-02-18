import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CourseSummaryComponent } from './course-summary/course-summary.component';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './_helpers/auth.guard'

import { ToastrModule } from 'ngx-toastr';
import { UserService } from './_services/user.service';
import { StartDiscussionComponent } from './start-discussion/start-discussion.component';


@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    CourseSummaryComponent,
    LogInComponent,
    UserRegistrationComponent,
    ForumComponent,
    HomeComponent,
    StartDiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService,
    AuthGuard,
    ], //
bootstrap: [AppComponent]
})
export class AppModule { }
 