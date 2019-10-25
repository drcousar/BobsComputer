/*
; Title:  starter code
; Author: Professor Krasso
; Date:   21 October 2019
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
import { UserManagementEditDialogComponent } from './pages/user-management-edit-dialog/user-management-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionLayoutComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    BaseLayoutComponent,
    UserManagementComponent,
    UserManagementEditDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {useHash: true, enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
