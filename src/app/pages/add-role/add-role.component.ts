/*
============================================
; Title:  add-role.component.ts
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
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role: any;
  _id: string;
  form: FormGroup;
  name: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  saveRole() {
    this.http.post('/api/roles/add', {
      name: this.name
    }).subscribe(res => {
      this.router.navigate(['/roles']);
      console.log(res);
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
