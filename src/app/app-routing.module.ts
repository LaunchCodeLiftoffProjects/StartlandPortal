import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ModulesComponent } from './modules/modules.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';
import { Module5Component } from './module5/module5.component';
import { ForumComponent } from './forum/forum.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';

import { StartDiscussionComponent } from './start-discussion/start-discussion.component';
import { DiscussionPostComponent } from './discussion-post/discussion-post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'modules', component: ModulesComponent},
  { path: 'module1', component: Module1Component},
  { path: 'module2', component: Module2Component},
  { path: 'module3', component: Module3Component},
  { path: 'module4', component: Module4Component},
  { path: 'module5', component: Module5Component},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'forum', component: ForumComponent },
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'start-discussion', component: StartDiscussionComponent },
  { path: 'discussion-post', component: DiscussionPostComponent },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
