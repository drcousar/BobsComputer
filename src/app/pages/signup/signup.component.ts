/*
============================================
; Title:  Bob's Computer
; Author: Alan
; Date:   28 October 2019
; Description: Bob's Computer
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public form ={
    email:null,
    name:null,
    password:null,
    password_confirmation:null,
    address:null,
    state:null,
    zipcode:null,

  };

public error =[];;



  constructor(private http: HttpClient) { }


  onSubmit(){
    return this.http.post('url',this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)


    );

  }

  handleError(error){
    this.error =error.error.errors;
  };


  ngOnInit() {
  }

}
