/*
; Title:  starter code
; Author: Professor Krasso
; Date:   21 October 2019
; ModifiedBy: Don Cousar
; ModifiedDate: 25 October 2019
; Description: BobComputer Starter Code
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { SessionLayoutComponent } from './shared';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

//material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Platform } from '@angular/cdk/platform';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UserManagementDeleteDialogComponent } from './pages/user-management-delete-dialog/user-management-delete-dialog.component';
import { SecurityQuestionsComponent } from './pages/security-questions/security-questions.component';
import { QuestionDetailsComponent } from './pages/question-details/question-details.component';
import { SecurityQuestionsDeleteDialogComponent } from './pages/security-questions-delete-dialog/security-questions-delete-dialog.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './shared/auth.guard';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    SessionLayoutComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    BaseLayoutComponent,
    UserManagementComponent,
    UserManagementDeleteDialogComponent,
    UserDetailsComponent,
    SecurityQuestionsComponent,
    QuestionDetailsComponent,
    SecurityQuestionsDeleteDialogComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatRadioModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, {useHash: true, enableTracing: false})
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard, CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UserManagementDeleteDialogComponent,
    SecurityQuestionsDeleteDialogComponent
  ]
})
export class AppModule { }
