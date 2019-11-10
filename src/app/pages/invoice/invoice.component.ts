import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { HomeComponent } from "../home/home.component";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { from } from "rxjs";
import { FormGroup } from '@angular/forms';


@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  //http: any;
  //cookieService: any;
  //router: any;
  errorMessage: string;
  invoice:any;
  number:any;
  lineItems: any;
  length:any;
  
  
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private router: Router) {
    console.log(data.invoice);
    this.invoice = data.invoice;
    this.number = this.invoice.lineItems,
    console.log(this.lineItems);
  }
  
  confirm() {
    console.log('Calling API!');
      this.http
        .post("api/invoices/" + this.invoice.username, {
          
          number:this.invoice.lineItems,
          selectedServices: this.invoice.lineItems,
          partsCost: this.invoice.partsAmount,
          laborHours: this.invoice.laborAmount,
          selectedServicesTotal: this.invoice.lineItemTotal ,
          
          
          total: this.invoice.total,
          dateCreated: this.invoice.orderDate,
           
                     
          })
          
          .subscribe(
            res => {
              this.router.navigate(["/"]);
            },
            err => {
              console.log(err);
            }
          );
          
  }
  cancel() {
    this.router.navigate(['/']);
  }

  
  ngOnInit() {}
}


/*number: req.body.number,
selectedServices: req.body.selectedServices,
partsCost: req.body.partsCost,
laborHours: req.body.laborHours,
selectedServicesTotal: req.body.selectedServicesTotal,
total: req.body.total,
username: username,
dateCreated: req.body.dateCreated*/