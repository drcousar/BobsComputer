/*
; Title:  login.component.ts
; Author: Professor Krasso
; Date:   29 October 2019
; Modified By: Jordan Hennessy & Don CousarS
; Description: BobComputer Starter Code
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private cookieService: CookieService,
              private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }


  login() {

    const username = this.form.controls['username'].value;
    const password = this.form.controls['password'].value; // Don

    //Send POST request to authenticate - Don
    this.http.post  ('/api/users  ', {
      'username': username,
      'password': password
    }).subscribe(res => {
      if (res) {
        this.cookieService.set('isAuthenticated', 'true', 10);
        this.cookieService.set('username', username, 1);
        this.router.navigate(['/']);
        console.log(res);
      } else {
        this.errorMessage = "The user credentials you entered were invalid!"
      }
    })
  }
}
