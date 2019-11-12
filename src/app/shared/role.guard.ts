/*
============================================
; Title:  auth.guard.ts
; Author: Don Cousar
; Date:   5 November 2019
; Description: Bob's Computer Repair Shop
; If user has role set as admin on their profile, grant admin access
;===========================================
*/
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { resolve } from 'url';
import { promise } from 'protractor';
import { reject } from 'q';

@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate {
    role: string = '';
    isAdmin: boolean = false;

    constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        //Grab username from cookie
        const username = this.cookieService.get('username');

        //wrap HTTP POST in a promise
        return new Promise ((resolve, reject) =>{
            this.http.get('/api/users/getuname/' + username)
            .subscribe(res => {
                this.role = res['role'];
                console.log('Role Type: ' + this.role);
                
                //Determine if user has the admin role set in the user collection
                if(this.role === "admin") {
                    this.isAdmin = true;
                    console.log('Admin Verified');
                    resolve(true);
                } else {
                    console.log('Not an Admin...Rejecting...');
                    this.isAdmin = false;

                    //Send user to a not authorized error page
                    this.router.navigate(['/session/401']);
                    reject(false);
                }
            }) //end subscribe
        }) //end return
    } //end CanActivate
} //end class