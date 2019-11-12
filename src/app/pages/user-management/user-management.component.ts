/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   23 October 2019
; Description: Bob's Computer
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserManagementDeleteDialogComponent } from '../../pages/user-management-delete-dialog/user-management-delete-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from "@angular/router";
import { DataSource } from '@angular/cdk/table';

/**
 * BEGIN STATIC TEST DATA TO BEGIN CODING WITH
 */


/**
 * END STATIC TEST DATA
 */

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: any;
  displayedColumns = ['username', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'role', 'edit', 'delete'];

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) {
    // console.table(USERS);  //Displays Static array of users defined above

    //Call Jordan's API to get all users
    this.http.get('/api/users').subscribe(res => {
      this.users = res;

      //Prove that this.users is populated
      console.log('API GET USERS: ');
      console.table(this.users);

    }, err => {
      console.log('API GET USERS ERROR: ' + err);
    },
    () => {
      //What to do upon success
      //nothing for now
    });
  }

  /**
   * Delete User Function
   */
    delete(userId, username) {
      
      const dialogRef = this.dialog.open(UserManagementDeleteDialogComponent, {
        data: {
          userId: userId,
          username: username,
          users: this.users
        },
        disableClose: true,
        width: '800px'
      })

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        //A = cancelled dialog modal; B = Confirmed and deleted dialog modal
        if(result === 'B') {
          this.users = this.users.filter(u => u._id !== userId);
        }
      })
  }  //close delete function

  ngOnInit() {

  }
} //close export class
