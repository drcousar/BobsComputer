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
  Role: string = '';
  SelectedRole: string = '';
  roles: any;
  selected: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('id');

    

    //Call Jordan's API to get all users (temporarily pointing to Don's)
    this.http.get('/api/roles').subscribe(res => {
      this.roles = res;

      //Prove that this.users is populated
      console.log('API GET Questions: ');
      console.table(this.roles);

    }, err => {
      console.log('API GET QUESTIONS ERROR: ' + err);
    },
    () => {
      //What to do upon success
      //nothing for now
    });

  }

   /**
    * Call Jordan's Update API to write new values
    */
   saveUser() {
    console.log("Role: " + this.Role);
    
     this.http.put('/api/users/' + this.userId, {
       phoneNumber: this.PhoneNumber,
       address: this.Address,
       email: this.Email,
       role: this.Role
     }).subscribe(res => {
       this.router.navigate(['/user']);
     })
   }

   cancel() {
     this.router.navigate(['/user']);
   }

  ngOnInit() {

    /**
    * Call Jordan's GET API to retreive current values to populate HTML
    */
   this.http.get('/api/users/' + this.userId).subscribe(res => {
    this.user = res;

    this.PhoneNumber = res['phoneNumber'];
    this.Address = res['address'];
    this.Email = res['email'];
    this.selected = this.SelectedRole = res['role'];

    console.log('API EDIT GET USERS');
    console.table(res);
    console.log(this.selected);

  }, err => {
    console.log(err);
  }, () => {
      //Do nothing after the get
  })
  /**
  * Call Jordan's GET API to retreive current values to populate HTML
  */
  this.http.get('/api/users/' + this.userId).subscribe(res => {
    this.user = res;

    this.PhoneNumber = res['phoneNumber'];
    this.Address = res['address'];
    this.Email = res['email'];
    this.selected = this.SelectedRole = res['role'];

    console.log('API EDIT GET USERS');
    console.table(res);
    console.log(this.selected);

  }, err => {
    console.log(err);
  }, () => {
      //Do nothing after the get
  })
    
    this.form = this.fb.group({
      phoneNumber: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      role:  [null, Validators.compose([Validators.required])]
    })
   
  }

}

