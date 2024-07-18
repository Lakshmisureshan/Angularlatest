import { Component, OnInit } from '@angular/core';
import { ColDef, IDetailCellRendererParams } from 'ag-grid-community';
import { TradeContractServicesService } from '../../services/trade-contract-services.service';
import { BtncellrenderComponent } from '../../../buttoncellrenderer/btncellrender/btncellrender.component';
import { ButtoncellrenderderfrieghtupdateComponent } from '../../buttoncellrenderderfrieghtupdate/buttoncellrenderderfrieghtupdate/buttoncellrenderderfrieghtupdate.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listtradecontract',
  templateUrl: './listtradecontract.component.html',
  styleUrls: ['./listtradecontract.component.css']
})
export class ListtradecontractComponent  implements OnInit {

  gridApi: any;
  rowData: any[] = [];
  public columnDefs: ColDef[] = [];
  onGridReady(params: any): void {
    this.gridApi = params.api;
  }

  gridOptions = {
    columnDefs: this.columnDefs,
    context: {
      componentParent: this
    },
    components:  {
buttonCellRenderer: BtncellrenderComponent,
buttoncellrenderderfrieghtupdate:ButtoncellrenderderfrieghtupdateComponent


    },
    masterDetail: true,

    detailCellRendererParams: {
      detailGridOptions: {
        columnDefs: [
          { headerName: 'Product ID', field: 'ttProductid' },
          { headerName: 'Product Name', field: 'productname' },

        
        ],
        defaultColDef: {
          flex: 1,
        },
      },
      getDetailRowData: this.getDetailRowData.bind(this)
    },





















  }
  expandCollapseRow(rowNode: { setExpanded: (arg0: boolean) => void; expanded: any; }) {
    rowNode.setExpanded(!rowNode.expanded);
  }

  getDetailRowData(params: any) {
    this.tradecontractservice.GetTradetransactiondetaildbyTCID(params.data.transactionID).subscribe({
      next: (parts) => {
        params.successCallback(parts);
      }
    });
  }



  setColumnDefs(): void {
    this.columnDefs = [
      {
        headerName: 'Actions',
        cellRenderer: 'buttonCellRenderer'
      },
    { headerName: 'TransactionID', field: 'transactionID', width: 50,},
    {headerName:'Customer', field:'customername',width: 200},
    {headerName:'Trade TransactionDate', field:'tradeTransactionDate',width: 150},
    {headerName:'Trade Initiation ID', field:'transactionInitiationid', width: 100},
    {headerName:'Remarks', field:'remarks'},

    {
      headerName: 'Actions',
      cellRenderer: (params: any) => {
        const container = document.createElement('div');
container.className = 'container';

// Create first row element
const row1 = document.createElement('div');
row1.className = 'row';
row1.style.justifyContent="center";
row1.style.alignItems="center";

// Create the first button element
const button1 = document.createElement('button');
button1.className = 'btn btn-success'; // Use Bootstrap button classes
button1.style.width = '160px';
button1.style.height = '40px';
button1.style.whiteSpace = 'nowrap';
button1.style.overflow = 'hidden';
button1.style.textOverflow = 'ellipsis';
button1.innerHTML = '<i class="fas fa-check mr-1"></i>Frieght Update'; // Font Awesome icon and text

// Add event listener for the first button
button1.addEventListener('click', () => this.onButtonClick(params.data));

// Append the first button to the first row
row1.appendChild(button1);

// Create second row element
const row2 = document.createElement('div');
row2.className = 'row mt-2'; // Add top margin for spacing between rows
row2.style.justifyContent="center";
row2.style.alignItems="center";
// Create the second button element
const button2 = document.createElement('button');
button2.className = 'btn btn-warning'; // Use Bootstrap button classes
button2.style.width = '160px';
button2.style.height = '40px';
button2.style.whiteSpace = 'nowrap';
button2.style.overflow = 'hidden';
button2.style.textOverflow = 'ellipsis';
button2.innerHTML = '<i class="fas fa-check mr-1"></i>Costing Sheet'; 
// Append the second button to the second row
row2.appendChild(button2);



const row3 = document.createElement('div');
row3.className = 'row mt-2';
row3.style.justifyContent="center";
row3.style.alignItems="center";

// Create the first button element
const button3 = document.createElement('button');
button3.className = 'btn btn-success'; // Use Bootstrap button classes
button3.style.width = '160px';
button3.style.height = '40px';
button3.style.whiteSpace = 'nowrap';
button3.style.overflow = 'hidden';
button3.style.textOverflow = 'ellipsis';
button3.innerHTML = '<i class="fas fa-check mr-1"></i>Supplier Contract'; 
row3.appendChild(button3);








const row4 = document.createElement('div');
row4.className = 'row mt-2';
row4.style.justifyContent="center";
row4.style.alignItems="center";

// Create the first button element
const button4 = document.createElement('button');
button4.className = 'btn btn-success'; // Use Bootstrap button classes
button4.style.width = '160px';
button4.style.height = '40px';
button4.style.whiteSpace = 'nowrap';
button4.style.overflow = 'hidden';
button4.style.textOverflow = 'ellipsis';
button4.innerHTML = '<i class="fas fa-check mr-1"></i>Customer Contract'; 
row4.appendChild(button4);






















// Append both rows to the container
container.appendChild(row1);
container.appendChild(row2);
container.appendChild(row3);
container.appendChild(row4);
// Append container to the target element

          return container;
      }
    },
   

      
    ]

  }

  constructor(private tradecontractservice:TradeContractServicesService, private router:Router)
  {



  }
  onButtonClick(rowData: any): void {
    const transactionId = rowData.transactionID;
    console.log (transactionId);
    this.router.navigate([`trading/FrieghtChargeUpdate/${transactionId}`]);
  }
  ngOnInit(): void {
    this.setColumnDefs();
    this.tradecontractservice.getTradeContractDetails().subscribe({

next :(response)=>{
this.rowData=response;

console.log (this.rowData);
this.gridApi.setRowData(this.rowData);
}

    })
  }
}
