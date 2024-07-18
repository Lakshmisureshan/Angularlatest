import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-linkrenderer',
  templateUrl: './linkrenderer.component.html',
  styleUrls: ['./linkrenderer.component.css']
})
export class LinkrendererComponent implements ICellRendererAngularComp {



  /**
   *
   */
  constructor(private router:Router) {
    

  }
  value: any;
  crid :any;
  customerName :any;
  agInit(params: any): void {
 //this.value = params.value;
 // alert(this.value);
   this.crid = params.data.crid;
   this.customerName = params.data.customername;


//alert(this.crid);

//alert(this.customerName);

  }

  refresh(): boolean {
    return false;
  }

  onLinkClick(event: any): void {
    event.preventDefault();
    // Redirect to the trade initiation creation page passing the CRID
    //this.router.navigateByUrl('trade/tradeinitiation/' + this.crid);
    const encodedCustomerName = encodeURIComponent(this.customerName);
    this.router.navigateByUrl(`trade/tradeinitiation/${this.crid}/${encodedCustomerName}`);


  }
}
