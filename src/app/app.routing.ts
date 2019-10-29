/*
; Title:  starter code
; Author: Professor Krasso
; Date:   21 October 2019
; Description: BobComputer Starter Code
;===========================================
*/
import {Routes} from '@angular/router';
import {BaseLayoutComponent, SessionLayoutComponent} from './shared';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';
import { UserManagementDeleteDialogComponent } from './pages/user-management-delete-dialog/user-management-delete-dialog.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SecurityQuestionsComponent } from './pages/security-questions/security-questions.component';
import { QuestionDetailsComponent } from './pages/question-details/question-details.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserManagementComponent
      },
      {
       path: 'deleteuser/:id',
       component: UserManagementDeleteDialogComponent
      },
      {
       path: 'edituser/:id',
       component: UserDetailsComponent
      },
      {
        path: 'questions',
        component: SecurityQuestionsComponent
      },
      {
        path: 'questions/edit/:id',
        component: QuestionDetailsComponent
      }
    ]
  },
  {
    path: 'session',
    component: SessionLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];
