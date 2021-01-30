import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LogInComponent } from './log-in/log-in.component'

const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'log-in', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }