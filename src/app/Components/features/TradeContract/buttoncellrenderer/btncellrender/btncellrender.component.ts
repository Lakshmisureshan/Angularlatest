import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-btncellrender',
  template: `<button (click)="invokeParentMethod()">Expand/Collapse</button>`
})
export class BtncellrenderComponent implements ICellRendererAngularComp  {

  private params:any;
  agInit(params: ICellRendererParams<any, any, any>): void {
   this.params=params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  invokeParentMethod() {
    this.params.context.componentParent.expandCollapseRow(this.params.node);
  }

}
