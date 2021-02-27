import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Authentication Check (canActivate) for accessing Routes
import { AuthenticationService } from './_services/authentication.service';

// Componenets for Routes
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { AssignmentCommentsComponent } from './assignment-comments/assignment-comments.component';
import { ModulesComponent } from './modules/modules.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';
import { Module5Component } from './module5/module5.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  // Register and Log In Users
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: '', component: LogInComponent },
  // Home Page
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationService] },
  // Forum & Comments on Assignment Submissions
  { path: 'forum', component: ForumComponent, canActivate: [AuthenticationService] },
  { path: 'assignment-comments/:id', component: AssignmentCommentsComponent, canActivate: [AuthenticationService] },
  // Course Content & Assignment Submission
  { path: 'modules', component: ModulesComponent, canActivate: [AuthenticationService] },
  { path: 'module1', component: Module1Component, canActivate: [AuthenticationService] },
  { path: 'module2', component: Module2Component, canActivate: [AuthenticationService] },
  { path: 'module3', component: Module3Component, canActivate: [AuthenticationService] },
  { path: 'module4', component: Module4Component, canActivate: [AuthenticationService] },
  { path: 'module5', component: Module5Component, canActivate: [AuthenticationService] },
  { path: 'submit-assignment/:moduleNum', component: SubmitAssignmentComponent, canActivate: [AuthenticationService] },
  // View Current User's Profile
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthenticationService] },
  
  // This path goes LAST
  { path: '**', redirectTo: '' }
  // Any paths after will redirect to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
