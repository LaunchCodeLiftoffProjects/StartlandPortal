import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent},
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }