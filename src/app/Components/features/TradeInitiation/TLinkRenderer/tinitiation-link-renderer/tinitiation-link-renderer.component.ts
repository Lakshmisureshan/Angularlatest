import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellEditorAngularComp, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellEditorParams, ICellRendererParams } from 'ag-grid-community';
@Component({
  selector: 'app-tinitiation-link-renderer',
  templateUrl: './tinitiation-link-renderer.component.html',
  styleUrls: ['./tinitiation-link-renderer.component.css']
})
export class TInitiationLinkRendererComponent  implements ICellRendererAngularComp {
  tInitationID:any;
   constructor(private router:Router) {
    }
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.tInitationID = params.data.tInitationID;
  }
refresh(params: ICellRendererParams<any, any, any>): boolean {
 return false;
  }




  onLinkClick(event: any): void {
    event.preventDefault();
    
    this.router.navigateByUrl(`trade/EditTradeInitiation/${this.tInitationID}`);


  }
  
}
