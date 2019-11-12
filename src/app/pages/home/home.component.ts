/*
; Title:  starter code
; Author: Professor Krasso
:Modified by Group 2
; Date:   21 October 2019
; Description: BobComputer Starter Code
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { InvoiceComponent } from '../invoice/invoice.component';

@Component({
  selector: "app-total",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  username: string;
  services: any;
  /*
  services = [
    { title: "Password Reset", price: 39.00, id: "101" },
    { title: "Spyware Removal", price: 39.00, id: "102" },
    { title: "RAM Upgrade", price: 149.00, id: "103" },
    { title: "Software Installation", price: 69.00, id: "104" },
    { title: "PC Tune-up", price: 49.00, id: "105" },
    { title: "Keyboard Cleaning", price: 19.00, id: "106" },
    { title: "Disk Clean-up", price: 139.00, id: "107" }
  ];
*/

  number: any;
  partsAmount: number = 0;
  laborAmount: number = 0;

  constructor(
    private http: HttpClient,
    private cookieservice: CookieService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) {
    //get username
    this.username = this.cookieservice.get("username");
    this.partsAmount = 0;
    this.laborAmount = 0;
    http.get('/api/services').subscribe(res => {
      //assign services from API
      this.services = res;

      //Prove that this.users is populated
      console.log('API GET SERVICES: ');
      console.table(this.services);

    }, err => {
      console.log('API GET SERVICES ERROR: ' + err);
    },
    () => {
      //What to do upon success
      //nothing for now
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      parts: [null, Validators.compose([Validators.required])],
      labor: [null, Validators.compose([Validators.required])],
      alternator: [null, null]
    });
  }

  submit(form) {
    console.log(form);
    const selectedServiceIds = [];
    for (const [key, value] of Object.entries(form.checkGroup)) {
      if (value) {
        selectedServiceIds.push({
          id: key
        });
      }
    }

    this.number = this.http.get('/api/invoices').subscribe(res => {
      this.number = res;
      console.log("Returned Invoice Number: " + res );
    })

    const lineItems = [];

    /**
     * build the invoice object
     */

    for (const savedService of this.services) {
      for (const selectedService of selectedServiceIds) {
        if (savedService._id === selectedService.id) {
          lineItems.push({
            serviceName: savedService.serviceName,
            serviceCost: savedService.cost,

          });
        }
      }
    }




    console.log(lineItems);
    this.partsAmount = parseFloat(form.parts);
    this.laborAmount = form.labor * 50;
    const lineItemTotal = lineItems.reduce((prev, cur) => prev + cur.serviceCost, 0);
    const total = parseFloat((this.partsAmount + this.laborAmount + lineItemTotal).toFixed(2));

    console.log(lineItemTotal);

    const invoice = {
      lineItems: lineItems,
      partsAmount: this.partsAmount,
      laborAmount: this.laborAmount,
      lineItemTotal: lineItemTotal,
      total: total,
      username: this.username,
      orderDate: new Date(),
      number: this.number,
    };
    console.log(invoice);

    const dialogRef = this.dialog.open(InvoiceComponent, {
      data: {
        invoice: invoice
      },
      disableClose: true,
      width: "800px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm") {
        console.log("invoice saved");
        this.laborAmount = 0;
        this.partsAmount = 0;
      }
    });
  }
}
