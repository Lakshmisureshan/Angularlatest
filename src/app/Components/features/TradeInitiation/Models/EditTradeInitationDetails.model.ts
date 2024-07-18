import { NumberFormatStyle } from "@angular/common";
import { StartEditingCellParams } from "ag-grid-community";

export interface EditTradeInitiationDetails{
    titblid :number;
    tiid :string,
    crtblid :string,
    productid :number,
    productname:string;
    supplierid:string;
    buyingprice:number,
    sellingprice:number,
    qty:number

     }