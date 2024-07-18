import { Component, OnInit } from '@angular/core';
import { NewrequirementService } from '../../services/newrequirement.service';
import { LinkrendererComponent } from 'src/app/Components/Core/linkrenderer/linkrenderer/linkrenderer.component';
import { LinkrenderercustomerComponent } from 'src/app/Components/Core/linkrenderercustomer/linkrenderercustomer/linkrenderercustomer.component';

@Component({
  selector: 'app-list-newrequirement',
  templateUrl: './list-newrequirement.component.html',
  styleUrls: ['./list-newrequirement.component.css']
})
export class ListNewrequirementComponent  implements OnInit {
 
  gridApi: any;
  gridOptions: any;
  onGridReady(params: any): void {
    this.gridApi = params.api;
  }
constructor(private newcustomrerequirementservice:NewrequirementService )
{


}

columnDefs = [
  { headerName: 'CRID', field: 'crid', sortable: true, filter: true, floatingFilter: true, cellRenderer: 'linkRenderer' },
  { headerName: 'Customer', field: 'customername', sortable: true, filter: true, floatingFilter: true  },
  { headerName: 'Division', field: 'divisionname', sortable: true, filter: true, floatingFilter: true },
  { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
  { headerName: 'Status', field: 'statusname', sortable: true, filter: true, floatingFilter: true },
  { headerName: 'Approved/Rejected', field: 'approvedrejectedstatusname', sortable: true, filter: true, floatingFilter: true },

  // Add more columns as needed
];
  rowData: any[] = [];
  ngOnInit(): void {
    this.gridOptions = {
      components: {
        linkRenderer: LinkrendererComponent,
     
      },
      // Other grid options
    };







    this.newcustomrerequirementservice.getNewcustomerRequirementDetails().subscribe({
      next: (response) => {
        // Assuming response is an array of data
        console.log(JSON.stringify(response));
        this.rowData = response;
      },
      error: (error) => {
        // Handle error if needed
        console.error('Error fetching data:', error);
      }
    });
  }
}
