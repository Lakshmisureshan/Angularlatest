import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
@Component({
  selector: 'app-list-trade-initiation-button-render',
  template: `
    <button *ngIf="params.data.approvedrejected === 'Approved' && params.data.transactionid === 0"
            [ngClass]="{'create-contract-button': true, 'highlight-button': isHighlighted()}"

            (click)="onClick($event)">
            
      Create Contract Initiation
    </button>
  `,
  styles: [`
    .create-contract-button {
      background-color: lightblue;
      border: 1px solid blue;
      padding: 5px 8px;
      font-size: 14px;
      border-radius: 7px;
    }
    .highlight-button {
   
      color: black;
    }
  `]
})
export class ListTradeInitiationButtonRenderComponent   implements ICellRendererAngularComp  {
  params: any;

  tiid :any;
  customerName :any;
  constructor(private router:Router) {
  }
  onClick($event: any) {
 alert("dfmsdfsd");

 //this.router.navigateByUrl(`trading/TradeContract/${this.tiid}`);



 const encodedCustomerName = encodeURIComponent(this.customerName);
 this.router.navigateByUrl(`trading/TradeContract/${this.tiid}/${encodedCustomerName}`);


  }









  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params;

    console.log(this.params.data);

    this.tiid =params.data.tInitationID;
    this.customerName = params.data.customername;


  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error('Method not implemented.');
  }
  isHighlighted(): boolean {
    // Add logic to determine if the button should be highlighted
    return this.params.data.transactionid === 0;
  }
}
