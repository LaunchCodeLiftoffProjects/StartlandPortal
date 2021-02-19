import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForumComponent } from './forum/forum.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { ProgressBarComponent} from './progress-bar/progress-bar.component';
import { StartDiscussionComponent } from './start-discussion/start-discussion.component'
import { DiscussionPostComponent } from './discussion-post/discussion-post.component'


const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'forum', component: ForumComponent },
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent },

  { path: 'progress-bar', component: ProgressBarComponent},
  { path: 'start-discussion', component: StartDiscussionComponent },
  { path: 'discussion-post', component: DiscussionPostComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
