/*
============================================
; Title:  role-management.component.ts
; Author: Jordan Hennessy
; Date:   6 November 2019
; Description: Bob's Computer Repair Shop
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleDeleteDialogComponent } from '../role-delete-dialog/role-delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {

  roles: any;
  displayedColumns = ['name', 'edit', 'delete'];

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) {

    this.http.get('/api/roles').subscribe(res => {
      this.roles = res;
      console.log(this.roles);
    }, err => {
      console.log(err);
    }, () => {});
  }

  delete(_id, name): void {
    const dialogRef = this.dialog.open(RoleDeleteDialogComponent, {
      data: {
        _id: _id,
        name: name
      },
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.http.get('/api/roles').subscribe(res => {
        this.roles = res;
        console.log(this.roles);
      }, err => {
        console.log(err);
      }, () => {});
    })
  }

  ngOnInit() {
  }

}
