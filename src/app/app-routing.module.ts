import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForumComponent } from './forum/forum.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { AssignmentCommentsComponent } from './assignment-comments/assignment-comments.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';


const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'forum', component: ForumComponent },
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'assignment-comments/:id', component: AssignmentCommentsComponent },
  { path: 'submit-assignment/:moduleNum', component: SubmitAssignmentComponent },

  // This path goes LAST
  { path: '**', redirectTo: '' }
  // Any paths after will redirect to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }