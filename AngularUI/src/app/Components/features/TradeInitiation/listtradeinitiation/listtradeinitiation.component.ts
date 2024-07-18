import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { TradeinitiationService } from '../services/tradeinitiation.service';
import { TInitiationLinkRendererComponent } from '../TLinkRenderer/tinitiation-link-renderer/tinitiation-link-renderer.component';
@Component({
  selector: 'app-listtradeinitiation',
  templateUrl: './listtradeinitiation.component.html',
  styleUrls: ['./listtradeinitiation.component.css']
})
export class ListtradeinitiationComponent implements OnInit {
  constructor(private transactionservice:TradeinitiationService){

  }
  ngOnInit(): void {
    this.transactionservice.gettradeInitiationList().subscribe({
      next: (response) => {
        console.log(response);
        this.rowData = response;
        this.gridApi.setRowData(this.rowData);
      },
      error: (err) => {
        console.error('Error fetching trade initiation list', err);
      }
    });
    
    this.setColumnDefs();
    this.gridOptions = {
      components: {
        linkRenderer: TInitiationLinkRendererComponent,
     
      },
      // Other grid options
    };

  }
  gridOptions: any;
  gridApi: any;





  
  public columnDefs: ColDef[] = [];
  rowData: any[] = [];
  onGridReady(params: any): void {
    this.gridApi = params.api;
    if (this.rowData.length > 0) {
      this.gridApi.setRowData(this.rowData);
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      { headerName: 'TIID', field: 'tInitationID', cellRenderer: 'linkRenderer' },
      { headerName: 'customer Name', field: 'customername' },
      { headerName: 'Date', field: 'tInitationDate' },

      { headerName: 'Customer Payment Method', field: 'cpaymentmethodname' },

      
    ]

  }
}


