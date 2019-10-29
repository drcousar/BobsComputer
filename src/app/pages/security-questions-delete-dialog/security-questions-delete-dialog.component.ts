/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   23 October 2019
; Description: Bob's Computer
;===========================================
*/
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-questions-delete-dialog',
  templateUrl: './security-questions-delete-dialog.component.html',
  styleUrls: ['./security-questions-delete-dialog.component.css']
})

export class SecurityQuestionsDeleteDialogComponent implements OnInit {
  myQuestionId: string;
  myQuestion: string;

  constructor(
    private dialogRef: MatDialogRef<SecurityQuestionsDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private router: Router
  ) { 

    //Define variables to call from HTML
    this.myQuestionId = data.questionId;
    this.myQuestion = data.question;

    console.log('Dialog Question: ' + this.myQuestionId);
    /**
     * Prove that data made it over from Security Question Component
     */
    console.log('Delete Dialog: ');
    console.table(data);
  }

  ngOnInit() {
  }

}
