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
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question: any;
  questionId: string;
  form: FormGroup;
  QuestionText: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) { 

  }

  saveQuestion() {

    this.http.post('/api/questions/add', {
      questionText: this.QuestionText
    }).subscribe(res => {
      this.router.navigate(['/questions']);
    })
  }

  ngOnInit() {
    this.form = this.fb.group({
      questionText: [null, Validators.compose([Validators.required])]
    })
  }

}
