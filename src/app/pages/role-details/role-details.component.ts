/*
============================================
; Title:  role-details.component.ts
; Author: Jordan Hennessy
; Date:   6 November 2019
; Description: Bob's Computer Repair Shop
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  role: any;
  _id: string;
  form: FormGroup;
  name: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {

    this._id = this.route.snapshot.paramMap.get('id');

    this.http.get('/api/roles/' + this._id).subscribe(res => {
      this.role = res;
      this. name = res['name'];
    }, err => {
      console.log(err);
    })
  }

  updateRole() {
    this.http.put('/api/roles/' + this._id, {
      name: this.name
    }).subscribe(res => {
      this.router.navigate(['/roles']);
    })
  }

  cancel() {
    this.router.navigate(['/roles']);
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])]
    })
  }

}
