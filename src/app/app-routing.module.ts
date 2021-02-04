import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LogInComponent } from './log-in/log-in.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: '', component: LogInComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }