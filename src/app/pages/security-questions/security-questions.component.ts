/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   28 October 2019
; Description: Bob's Computer
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SecurityQuestionsDeleteDialogComponent } from '../../pages/security-questions-delete-dialog/security-questions-delete-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from "@angular/router";
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {
  questions: any;
  displayedColumns = ['questionText','edit', 'delete'];

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { 

    //Call Jordan's API to get all users
    this.http.get('/api/questions').subscribe(res => {
      this.questions = res;

      //Prove that this.users is populated
      console.log('API GET Questions: ');
      console.table(this.questions);

    }, err => {
      console.log('API GET QUESTIONS ERROR: ' + err);
    },
    () => {
      //What to do upon success
      //nothing for now
    });

  }

    /**
   * Delete User Function
   */
  delete(questionId, question) {
      

    const dialogRef = this.dialog.open(SecurityQuestionsDeleteDialogComponent, {
      data: {
        questionId: questionId,
        question: question,
        questions: this.questions
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {

      //A = cancelled dialog modal; B = Confirmed and deleted dialog modal
      if(result === 'B') {
        this.questions = this.questions.filter(q => q._id !== questionId);
      }
      console.table(result);
     if(confirm) {
      console.log('confirmed');
     }
    })
}  //close delete function

  ngOnInit() {
  }

}
