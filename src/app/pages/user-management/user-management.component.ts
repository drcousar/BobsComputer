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
import { UserManagementEditDialogComponent } from '../../pages/user-management-edit-dialog/user-management-edit-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from "@angular/router";

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
}

const USERS: users[] = [
  {userName: "dcousar", firstName: 'Donald', lastName: 'Cousar', phoneNumber: '6015551010', address: '100 Main St', email: "dcousar@yahoo.com"},
  {userName: "aedwards", firstName: 'Alan', lastName: 'Edwards', phoneNumber: '6015551011', address: '102 Main St', email: "aedwards@yahoo.com"},
  {userName: "jhennessy", firstName: 'Jordan', lastName: 'Hennessy', phoneNumber: '6015551012', address: '101 Main St', email: "jhennessy@yahoo.com"}
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
  displayedColumns = ['userName', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'edit', 'delete'];
  dataSource = USERS;
  router: Router;

  constructor(private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog) { 
    console.table(USERS);




    /*
    this.http.get('../../assets/data/users.json').subscribe(res => {
      this.users = res;
      console.log('Get Users Return');
      console.table(res);
    }, err => {
      console.log('Get Users Error: ' + err);
    })
    */
  }


  openDialog() {
    console.log("Open User Management Dialog");

    const dialogRef = this.dialog.open(UserManagementEditDialogComponent, {
      data: {
        userId: 'TEST ENTRY',
        userName: 'TEST ENTRY'
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.router.navigate(['/users']);
      }
    })

    dialogRef.componentInstance.userDetails = USERS; //This should be only one users array info
  }

  ngOnInit() {
    
  }

}
