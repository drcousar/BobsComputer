/*
; Title:  app.routing.ts
; Author: Professor Krasso
; Date:   21 October 2019
; Description: BobComputer Starter Code
;===========================================
*/
import {Routes} from '@angular/router';
import {BaseLayoutComponent, SessionLayoutComponent, AuthGuard} from './shared';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';
import { UserManagementDeleteDialogComponent } from './pages/user-management-delete-dialog/user-management-delete-dialog.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SecurityQuestionsComponent } from './pages/security-questions/security-questions.component';
import { QuestionDetailsComponent } from './pages/question-details/question-details.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user',
        component: UserManagementComponent,
        canActivate: [AuthGuard]
      },
      {
       path: 'user/edit/:id',
       component: UserDetailsComponent,
       canActivate: [AuthGuard]
      },
      {
        path: 'questions',
        component: SecurityQuestionsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'questions/edit/:id',
<<<<<<< HEAD
        component: QuestionDetailsComponent,
        canActivate: [AuthGuard]
=======
        component: QuestionDetailsComponent
      },
      {
        path: 'questions/add',
        component: AddQuestionComponent
>>>>>>> 04fe1d2958ab66439257f8b19fd7a4dba7aebfdc
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
