/*
============================================
; Title:  role-delete-dialog.component.ts
; Author: Jordan Hennessy
; Date:   6 November 2019
; Description: Bob's Computer Repair Shop
;===========================================
*/
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-role-delete-dialog',
  templateUrl: './role-delete-dialog.component.html',
  styleUrls: ['./role-delete-dialog.component.css']
})
export class RoleDeleteDialogComponent {
  roleId: string;
  role: string;

  constructor( private dialogRef: MatDialogRef<RoleDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private router: Router, private http: HttpClient ) {

    this.roleId = data._id;
    this.role = data.name;

  }

  onCancel(): void {
    this.dialogRef.close()
  }

  delete(roleId): void {
    this.http.delete('/api/roles/' + roleId).subscribe(res => {});

    this.dialogRef.close();
  }

}
