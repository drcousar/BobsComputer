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
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  
  PhoneNumber: string = '';
  Address: string = '';
  Email: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('id');

    /**
    * Call Jordan's GET API to retreive current values to populate HTML
    */
    this.http.get('/api/users/' + this.userId).subscribe(res => {
      this.user = res;

      this.PhoneNumber = res['phoneNumber'];
      this.Address = res['address'];
      this.Email = res['email'];

      console.log('API EDIT GET USERS');
      console.table(res);

    }, err => {
      console.log(err);
    }, () => {
        //Do nothing after the get
    })
   }

   /**
    * Call Jordan's Update API to write new values
    */
   saveUser() {

     this.http.put('/api/users/' + this.userId, {
       phoneNumber: this.PhoneNumber,
       address: this.Address,
       email: this.Email,
     }).subscribe(res => {
       this.router.navigate(['/user']);
     })
   }

   cancel() {
     this.router.navigate(['/user']);
   }

  ngOnInit() {
    
    this.form = this.fb.group({
      phoneNumber: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])]
    })
   
  }

}

