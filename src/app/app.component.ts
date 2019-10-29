/*
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   29 October 2019
; Modified By: Jordan Hennessy
; Description: BobComputer Starter Code
;===========================================
*/

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthGuard } from './shared';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})


export class AppComponent {
  title = `Bob's Computer Repair Shop`;

  constructor(private cookieService: CookieService, private router: Router, private authGuard: AuthGuard) {
    let test = this.cookieService.get("isAuthenticated");
    console.log(test);
    if (!test) {
      router.navigate(['/session/login']);
    }
  }
}
