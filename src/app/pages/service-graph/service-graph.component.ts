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
            backgroundColor: [
              '#80DEEA',
              '#FFB74D',
              '#26C6DA',
              '#FF9800',
              '#00ACC1',
              '#F57C00',
              '#00838F'
            ],
            hoverBackgroundColor: [
              '#FFCC80',
              '#4DD0E1',
              '#FFA726',
              '#00BCD4',
              '#FB8C00',
              '#0097A7',
              '#EF6C00'
            ],
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
