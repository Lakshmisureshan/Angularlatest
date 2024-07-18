import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-linkrenderercustomer',
  templateUrl: './linkrenderercustomer.component.html',
  styleUrls: ['./linkrenderercustomer.component.css']
})
export class LinkrenderercustomerComponent implements ICellRendererAngularComp {
  value: any;
  crid :any;
  customerName :any;
  agInit(params: any): void {
 //this.value = params.value;
 // alert(this.value);
   
   this.customerName = params.data.customername;




alert(this.customerName);

  }

  refresh(): boolean {
    return false;
  }

}
