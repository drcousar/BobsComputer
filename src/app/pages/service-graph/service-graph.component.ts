import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-graph',
  templateUrl: './service-graph.component.html',
  styleUrls: ['./service-graph.component.css']
})
export class ServiceGraphComponent implements OnInit {
  data: any;
  purchases: any;
  itemCount = [];
  labels = [];

  constructor(private http: HttpClient) {
    this.http.get('/api/invoices/graph').subscribe(res => {
      this.purchases = res;

      for (const item of this.purchases) {
        this.labels.push(item._id.title);
        this.itemCount.push(item.count);
      }

      this.data = {
        labels: this.labels,
        datasets:[
          {
            data: this.itemCount
          },
        ]
      };
      console.log(this.data);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
