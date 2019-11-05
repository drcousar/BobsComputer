/*
============================================
; Title:  verify-user.component.ts
; Author: Professor Krasso
; Date:   3 November 2019
; Modified By: Jordan Hennessy
; Description: Bob's Computer
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])]
    });
  }

  validateUsername() {
    const username = this.form.controls['username'].value;

    this.http.get('/api/verify/users/' + username).subscribe(res => {
      if (res) {
        this.router.navigate(['/session/verify-questions'], {queryParams: {username: username}, skipLocationChange: true});
      }
    }, err => {
      console.log(err);
    });
  }

}
