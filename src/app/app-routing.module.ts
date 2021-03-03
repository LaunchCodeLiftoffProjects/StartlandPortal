import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';
import { Module5Component } from './module5/module5.component';
import { ForumComponent } from './forum/forum.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { ProgressBarComponent} from './progress-bar/progress-bar.component';
import { AssignmentCommentsComponent } from './assignment-comments/assignment-comments.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'module1', component: Module1Component},
  { path: 'module2', component: Module2Component},
  { path: 'module3', component: Module3Component},
  { path: 'module4', component: Module4Component},
  { path: 'module5', component: Module5Component},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'forum', component: ForumComponent },
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'progress-bar', component: ProgressBarComponent},
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
