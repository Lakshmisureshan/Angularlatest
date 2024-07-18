import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-buttoncellrenderderfrieghtupdate',
  template: `     <button class="custom-button" (click)="callFreightChargePage()">Update Frieght Charge</button>

  <button class="custom-button" >Update Costing Sheet</button>
  
  `,
  styleUrls: ['./buttoncellrenderderfrieghtupdate.component.css']
})
export class ButtoncellrenderderfrieghtupdateComponent implements ICellRendererAngularComp{
  private params:any;
  constructor(private router:Router){
  }
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params=params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
  return false;
  }
  callFreightChargePage(): void {
    console.log ("sdbbsdbfdsbfs");
    // Navigate to the freight charge update page here
    this.router.navigate(['trading/FrieghtChargeUpdate']);
  }




}
