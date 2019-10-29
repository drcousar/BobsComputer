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
export interface users {
  userName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  email: string;
  userId: number;
}

const USERS: users[] = [
  {userName: "dcousar", firstName: 'Donald', lastName: 'Cousar', phoneNumber: '6015551010', address: '100 Main St', email: "dcousar@yahoo.com", userId: 1},
  {userName: "aedwards", firstName: 'Alan', lastName: 'Edwards', phoneNumber: '6015551011', address: '102 Main St', email: "aedwards@yahoo.com", userId: 2},
  {userName: "jhennessy", firstName: 'Jordan', lastName: 'Hennessy', phoneNumber: '6015551012', address: '101 Main St', email: "jhennessy@yahoo.com", userId: 3}
];

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
  displayedColumns = ['username', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'edit', 'delete'];

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
          username: username
        },
        disableClose: true,
        width: '800px'
      })

      dialogRef.afterClosed().subscribe(result => {
        //location.reload();
        this.users = this.users.filter(u => u._id !== userId);
        /**
         * BEGIN Working Delete Code
         */
        
         
        this.http.delete('api/users/' + userId).subscribe(res => {
          console.log('Deleted User..Redirecting to User List');
          this.users = this.users.filter(u => u._id !== userId);
         //this.router.navigate(['/user']);
        })
        

       /**
        * END Working Delete Code
        */

        /*
        if (result === 'confirm') {
          console.log('Deleting');
          this.http.delete('api/users/ + userId').subscribe(res => {
            console.log('Deleted User');
            this.users = this.users.filter(u => u._id !== userId);
          })
        }
        */
      })
  }  //close delete function

  ngOnInit() {

  }
} //close export class
