/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   28 October 2019
; Description: Bob's Computer
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
  question: any;
  questionId: string;
  form: FormGroup;
  
  QuestionText: string = '';
  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) { 

    this.questionId = this.route.snapshot.paramMap.get('id');
    /**
    * Call Dons's GET API to retreive current values to populate HTML
    * Attribution: Used Jordan's User Management PUT GET as a guide
    */
    this.http.get('/api/questions/' + this.questionId).subscribe(res => {
      this.question = res;

      this.QuestionText = res['questionText'];

      console.log('API EDIT GET USERS');
      console.table(res);

    }, err => {
      console.log(err);
    }, () => {
        //Do nothing after the get
    })
  }
  
     /**
    * Call Don's Update API to write new values
    * Attribution: Used Jordan's User Management PUT API as a guide
    */
   saveQuestion() {

    this.http.put('/api/questions/' + this.questionId, {
      questionText: this.QuestionText
    }).subscribe(res => {
      this.router.navigate(['/questions']);
    })
  }

  cancel() {
    this.router.navigate(['/questions']);
  }
  
 ngOnInit() {

   this.form = this.fb.group({
     questionText: [null, Validators.compose([Validators.required])]
   })

}

}
