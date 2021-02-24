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
import { UserProfileComponent} from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ModulesComponent } from './modules/modules.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';
import { Module5Component } from './module5/module5.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './_helpers/auth.guard'
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './_services/user.service';
import { StartDiscussionComponent } from './start-discussion/start-discussion.component';
import { DiscussionPostComponent } from './discussion-post/discussion-post.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    CourseSummaryComponent,
    UserProfileComponent,
    LogInComponent,
    UserRegistrationComponent,
    ModulesComponent,
    Module1Component,
    Module2Component,
    Module3Component,
    Module4Component,
    Module5Component,
    ForumComponent,
    HomeComponent,
    StartDiscussionComponent,
    DiscussionPostComponent,
    NavbarComponent

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
