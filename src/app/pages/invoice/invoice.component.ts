import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HomeComponent} from '../home/home.component';
  import { from } from 'rxjs';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  http: any;
  cookieService: any;
  router: any;
  errorMessage: string;
  
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
   
  ) { console.log(data.invoice) }

  ngOnInit() {
    //Send POST request to authenticate 
   // this.http.post  ('/api/invoices  ', + invoice.username, {
      
      
   // }).subscribe(res => {
    //  if (res) {
        //this.router.navigate(['/']);
    //    console.log(res);
      }
      // else {
      //  this.errorMessage = "Oops!"
      }
  //  })
//  }
//}