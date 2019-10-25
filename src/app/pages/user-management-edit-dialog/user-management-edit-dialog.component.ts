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
  selector: 'app-user-management-edit-dialog',
  templateUrl: './user-management-edit-dialog.component.html',
  styleUrls: ['./user-management-edit-dialog.component.css']
})
export class UserManagementEditDialogComponent implements OnInit {
  userDetails: any;
  
  constructor(
    private dialogRef: MatDialogRef<UserManagementEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 

  }

  ngOnInit() {
  }

}

