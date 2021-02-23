import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForumComponent } from './forum/forum.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { StartDiscussionComponent } from './start-discussion/start-discussion.component'
import { DiscussionPostComponent } from './discussion-post/discussion-post.component'
import { AssignmentReplyComponent } from './assignment-reply/assignment-reply.component';


const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'forum', component: ForumComponent },
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'start-discussion', component: StartDiscussionComponent },
  { path: 'discussion-post', component: DiscussionPostComponent },
  { path: 'assignment-reply', component: AssignmentReplyComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }