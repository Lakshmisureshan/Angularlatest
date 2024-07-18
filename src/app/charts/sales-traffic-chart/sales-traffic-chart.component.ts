import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { NewrequirementService } from 'src/app/Components/features/new-requirement/services/newrequirement.service';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.css']
})
export class SalesTrafficChartComponent  implements OnInit {
  public barChartOptions: ChartOptions =  {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    // Set the radius here
  
  };

  public barChartLabels: string[] = [];
  //['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartLegend: boolean = true;
  public barChartPlugins: any[] = [];

  public barChartData: ChartDataset[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  constructor(private newcustomrerequirementservice:NewrequirementService) { }
  ngOnInit(): void {
  
    this.newcustomrerequirementservice.getNewcustomerrequirementpermonth().subscribe(data=>{
this.barChartLabels=data.map(item=>item.month)
this.barChartData=[{

data:data.map(item=>item.count), label:'New req',

backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Set the background color here
borderColor: 'rgba(75, 192, 192, 1)',        // Set the border color here
borderWidth: 1,


}];
console.log(data);
console.log(this.barChartLabels);

console.log (this.barChartData)
    });
  }


}
