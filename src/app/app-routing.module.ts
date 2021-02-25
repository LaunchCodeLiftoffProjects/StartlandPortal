import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForumComponent } from './forum/forum.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { SubmitModuleOneComponent } from './submit-module-one/submit-module-one.component';
import { SubmitModuleTwoComponent } from './submit-module-two/submit-module-two.component';
import { SubmitModuleThreeComponent } from './submit-module-three/submit-module-three.component';
import { SubmitModuleFourComponent } from './submit-module-four/submit-module-four.component';
import { SubmitModuleFiveComponent } from './submit-module-five/submit-module-five.component';
import { AssignmentCommentsComponent } from './assignment-comments/assignment-comments.component';
import { AuthenticationService } from './_services/authentication.service';


const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: '', component: LogInComponent },
  { path: 'forum', component: ForumComponent, canActivate: [AuthenticationService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationService] },
  { path: 'submit-module-one', component: SubmitModuleOneComponent, canActivate: [AuthenticationService] },
  { path: 'submit-module-two', component: SubmitModuleTwoComponent, canActivate: [AuthenticationService] },
  { path: 'submit-module-three', component: SubmitModuleThreeComponent, canActivate: [AuthenticationService] },
  { path: 'submit-module-four', component: SubmitModuleFourComponent, canActivate: [AuthenticationService] },
  { path: 'submit-module-five', component: SubmitModuleFiveComponent, canActivate: [AuthenticationService] },
  { path: 'assignment-comments/:id', component: AssignmentCommentsComponent, canActivate: [AuthenticationService] },

  // This path goes LAST
  { path: '**', redirectTo: '' }
  // Any paths after will redirect to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }