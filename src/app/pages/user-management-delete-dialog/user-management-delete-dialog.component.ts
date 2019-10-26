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


@Component({
  selector: 'app-user-management-delete-dialog',
  templateUrl: './user-management-delete-dialog.component.html',
  styleUrls: ['./user-management-delete-dialog.component.css']
})
export class UserManagementDeleteDialogComponent implements OnInit {
  userDetails: any;
  constructor(
    private dialogRef: MatDialogRef<UserManagementDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 

    /**
     * Prove that data made it over from User Management Component
     */
    console.log('Delete Dialog: ');
    console.table(data);
  }

  ngOnInit() {
  }

}
