import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForumComponent } from './forum/forum.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { AssignmentReplyComponent } from './assignment-reply/assignment-reply.component';
import { SubmitModuleOneComponent } from './submit-module-one/submit-module-one.component';
import { SubmitModuleTwoComponent } from './submit-module-two/submit-module-two.component';
import { SubmitModuleThreeComponent } from './submit-module-three/submit-module-three.component';
import { SubmitModuleFourComponent } from './submit-module-four/submit-module-four.component';
import { SubmitModuleFiveComponent } from './submit-module-five/submit-module-five.component';



const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'forum', component: ForumComponent },
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'assignment-reply', component: AssignmentReplyComponent },
  { path: 'submit-module-one', component: SubmitModuleOneComponent },
  { path: 'submit-module-two', component: SubmitModuleTwoComponent },
  { path: 'submit-module-three', component: SubmitModuleThreeComponent },
  { path: 'submit-module-four', component: SubmitModuleFourComponent },
  { path: 'submit-module-five', component: SubmitModuleFiveComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }