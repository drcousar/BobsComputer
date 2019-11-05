/*
============================================
; Title:  verify-questions.component.ts
; Author: Professor Krasso
; Date:   3 November 2019
; Modified By: Jordan Hennessy
; Description: Bob's Computer
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-questions',
  templateUrl: './verify-questions.component.html',
  styleUrls: ['./verify-questions.component.css']
})
export class VerifyQuestionsComponent implements OnInit {

  selectedSecurityQuestions: any;
  question1: string;
  question2: string;
  question3: string;
  username: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private fb: FormBuilder) {

    this.username = this.route.snapshot.queryParamMap.get('username');
    console.log(this.username);

    this.http.get('/api/users/' + this.username + '/security-questions').subscribe(res => {
      this.selectedSecurityQuestions = res;

      this.question1 = this.selectedSecurityQuestions[0].questionText;
      this.question2 = this.selectedSecurityQuestions[1].questionText;
      this.question3 = this.selectedSecurityQuestions[2].questionText;

      console.log(this.selectedSecurityQuestions);
      console.log(this.question3);
    }, err => {
      console.log(err);
    }
    )}

  ngOnInit() {
    this.form = this.fb.group({
      answerToSecurityQuestion1: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion2: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion3: [null, Validators.compose([Validators.required])],
    });
  }

  verifySecurityQuestions() {
    const answerToSecurityQuestion1 = this.form.controls['answerToSecurityQuestion1'].value;
    const answerToSecurityQuestion2 = this.form.controls['answerToSecurityQuestion2'].value;
    const answerToSecurityQuestion3 = this.form.controls['answerToSecurityQuestion3'].value;

    this.http.post('/api/verify/users/' + this.username + '/security-questions', {
      answerToSecurityQuestion1: answerToSecurityQuestion1,
      answerToSecurityQuestion2: answerToSecurityQuestion2,
      answerToSecurityQuestion3: answerToSecurityQuestion3
    }).subscribe(res => {
      if (res['auth']) {
        this.router.navigate(['/session/reset-password'], {queryParams: {isAuthenticated: 'true', username: this.username}, skipLocationChange: true});
      } else {
        console.log('Unable to verify security question answers');
      }
    });
  }
}
