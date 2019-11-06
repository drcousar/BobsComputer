/*
; Title:  app.routing.ts
; Author: Professor Krasso
; Date:   21 October 2019
; Description: BobComputer Starter Code
;===========================================
*/
import {Routes} from '@angular/router';
import {BaseLayoutComponent, SessionLayoutComponent } from './shared';
import { AuthGuard } from './shared/auth.guard'
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';
import { UserManagementDeleteDialogComponent } from './pages/user-management-delete-dialog/user-management-delete-dialog.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SecurityQuestionsComponent } from './pages/security-questions/security-questions.component';
import { QuestionDetailsComponent } from './pages/question-details/question-details.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {ServerErrorComponent} from './pages/server-error/server-error.component';
import { VerifyUserComponent } from './pages/verify-user/verify-user.component';
import { VerifyQuestionsComponent } from './pages/verify-questions/verify-questions.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RoleManagementComponent } from './pages/role-management/role-management.component';
import { RoleDetailsComponent } from './pages/role-details/role-details.component';
import { AddRoleComponent } from './pages/add-role/add-role.component';



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
        component: QuestionDetailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'questions/add',
        component: AddQuestionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'roles',
        component: RoleManagementComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'roles/edit/:id',
        component: RoleDetailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'roles/add',
        component: AddRoleComponent,
        canActivate: [AuthGuard]
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
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent

      },
      {
        path: '500',
        component: ServerErrorComponent
      },
      {
        path: 'forgot-password',
        component: VerifyUserComponent
      },
      {
        path: 'verify-questions',
        component: VerifyQuestionsComponent
      },
      {
        path: 'reset-password',
        component: ForgotPasswordComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];
