import { NumberFormatStyle } from "@angular/common";
import { StartEditingCellParams } from "ag-grid-community";

export interface AddTradeInitiationDetails{
    tiid :string,
    crtblid :string,
    productid :number,
    supplierid:number;
    buyingprice:number,
    sellingprice:number,
    qty:number

     }