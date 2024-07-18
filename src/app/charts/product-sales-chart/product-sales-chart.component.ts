import { Type } from '@angular/compiler';
import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrls: ['./product-sales-chart.component.css']
})
export class ProductSalesChartComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public barChartLegend: boolean = true;
  public barChartPlugins: any[] = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  constructor() { }
}