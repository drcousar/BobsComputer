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
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-security-questions-delete-dialog',
  templateUrl: './security-questions-delete-dialog.component.html',
  styleUrls: ['./security-questions-delete-dialog.component.css']
})

export class SecurityQuestionsDeleteDialogComponent implements OnInit {
  myQuestionId: string;
  myQuestion: string;
  questions: any;

  constructor(
    private dialogRef: MatDialogRef<SecurityQuestionsDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private http: HttpClient,
    private router: Router
  ) { 

    //Define variables to call from HTML
    this.myQuestionId = data.questionId;
    this.myQuestion = data.question;
    this.questions = data.questions;

    console.log('Dialog Question: ' + this.myQuestionId);
    /**
     * Prove that data made it over from Security Question Component
     */
    console.log('Delete Dialog: ');
    console.table(data);
  }

  onCancel(): void {
    this.dialogRef.close('A');
  }


  delete() {
     /**
       * BEGIN Working Delete Code
       */
       
      this.http.delete('api/questions/' + this.myQuestionId).subscribe(res => {
        console.log('Deleted User..Redirecting to User List');
        this.dialogRef.close('B');
      }),
      (err) => {
        console.log(err);
      },
      () => {
        
      }
}

  ngOnInit() {
  }

}
