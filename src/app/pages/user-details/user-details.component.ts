/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   25 October 2019
; Description: Bob's Computer
; Attribution: Form Control Logic inspired by Professor Krasso @Bellevue University
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  userId: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('userId');

    /**
    * Call Jordan's GET API to retreive current values to populate HTML
    */
    this.http.get('/api/users/:id').subscribe(res => {
      this.user = res;
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls['firstName'].setValue(this.user.firstname);
      this.form.controls['lastName'].setValue(this.user.lastName);
      this.form.controls['phoneNumber'].setValue(this.user.phoneNumber);
      this.form.controls['address'].setValue(this.user.address);
      this.form.controls['email'].setValue(this.user.email);
    })
   }

   /**
    * Call Jordan's Update API to write new values
    */
   saveUser() {
     this.http.put('/api/users/' + this.userId, {
       firstName: this.form.controls['firstName'].value,
       lastName: this.form.controls['lastName'].value,
       phoneNumber: this.form.controls['phoneNumber'].value,
       address: this.form.controls['address'].value,
       email: this.form.controls['email'].value,
     }).subscribe(res => {
       this.router.navigate(['/user']);
     })
   }

   cancel() {
     this.router.navigate(['/user']);
   }
   
  ngOnInit() {
  }

}
