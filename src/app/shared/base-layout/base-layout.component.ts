/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   23 October 2019
; Description: BobComputer Starter Code
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  constructor(private router: Router,
              private cookieService: CookieService) { }

  ngOnInit() {
  }

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/login']);
  }

}
