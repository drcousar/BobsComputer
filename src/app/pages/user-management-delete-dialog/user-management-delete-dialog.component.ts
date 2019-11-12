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
  selector: 'app-user-management-delete-dialog',
  templateUrl: './user-management-delete-dialog.component.html',
  styleUrls: ['./user-management-delete-dialog.component.css']
})
export class UserManagementDeleteDialogComponent implements OnInit {
  myUserId: string;
  myUserName: string;
  users: any;

  constructor(
    private dialogRef: MatDialogRef<UserManagementDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private router: Router,
    private http: HttpClient
  ) { 

    //Define variables to call from HTML
    this.myUserId = data.userId;
    this.myUserName = data.username;
    this.users = data.users;

    console.log('Dialog User: ' + this.myUserId);
    /**
     * Prove that data made it over from User Management Component
     */
    console.log('Delete Dialog: ');
    console.table(data);
    
  }

  onCancel(): void {
    this.dialogRef.close('A')
  }

  delete() {
        this.http.delete('api/users/' + this.myUserId).subscribe(res => {
          console.log('Deleted User..Redirecting to User List');
          
        })
        this.dialogRef.close('B');
        //this.users = this.users.filter(u => u._id !== this.myUserId);
  }

  ngOnInit() {
  }

}
