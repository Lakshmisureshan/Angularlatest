import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/Components/features/financedashboard/services/dashboard.service';

@Component({
  selector: 'app-coloredbox',
  templateUrl: './coloredbox.component.html',
  styleUrls: ['./coloredbox.component.css']
})
export class ColoredboxComponent  implements OnInit {
  transactionnotdone?: number;
  newrequirement?: number;
  constructor(private dashservice:DashboardService)
  {



  }
  ngOnInit(): void {
    this.dashservice.gettransactionInitiationnotdone().pipe().subscribe({


      next: (response) => {
        this.transactionnotdone = Number(response);
       // alert(this.transactionnotdone);
  
      }
    });

    this.dashservice.getNewCustomerRequirement().pipe().subscribe({


      next: (response) => {
        this.newrequirement = Number(response);
        //alert(this.transactionnotdone);
  
      }
    });









  }

}
