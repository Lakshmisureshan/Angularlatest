import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TradeinitiationService } from '../../TradeInitiation/services/tradeinitiation.service';
import { gettradeinitiationlineitems } from '../../TradeInitiation/Models/gettradeinitiationlineitems.model';
import { ColDef } from 'ag-grid-community';
import { AddTradeInitiation } from '../../TradeInitiation/Models/AddTradeTransaction.model';
import { AddTradeContact } from '../model/tradecontract.model';
import { TradeContractServicesService } from './services/trade-contract-services.service';
import { AddTradeContractDetails } from '../model/tradecontractdetails.model';

@Component({
  selector: 'app-trade-contract',
  templateUrl: './trade-contract.component.html',
  styleUrls: ['./trade-contract.component.css']
})
export class TradeContractComponent  implements OnInit {
  tradecontract:  FormGroup ;
  refereno?:number 
  customername?:string;
  rowData: any[] = [];
  gridOptions: any;
  gridApi: any;
  public columnDefs: ColDef[] = [];
  model:AddTradeContact;
  model1:AddTradeContractDetails;

constructor(private fb:FormBuilder,private route: ActivatedRoute, private tradeinitiationservice:TradeinitiationService, private tradecontractservice:TradeContractServicesService,private router: Router){
 this.tradecontract =this.fb.group({
 ttid :this.refereno,
 ttdate :['', Validators.required],
 tino :['', Validators.required],
 customer:this.customername,
 remarks :['']

})

this.model={
  TransactionID :0,
  transactionInitiationid:0,
  TradeTransactionDate :'',
 tradeTransactionStageID:1,
 Remarks:'',
 transactionReferencenumber:'1001'

}
this.model1={
TradeTransactionsDetailsID:0,
ttProductid:0,
TransactionInitiationDetailsid:0,
TTransanID:0,




}









  }






  setColumnDefs(): void {
    this.columnDefs = [
      { headerName: 'Selling Price', field: 'sellingprice' },
      { headerName: 'Buying Price', field: 'buyingprice' },
      { headerName: 'Supplier', field: 'name' },
      { headerName: 'Qty', field: 'qty' },
      { headerName: 'Product', field: 'productname' },
      { headerName: 'titblid', field: 'titblid' },
      { headerName: 'productid', field: 'productid' },



    ]

  }







  onGridReady(params: any): void {
    this.gridApi = params.api;
  }
  ngOnInit(): void {


    this.setColumnDefs();






    this.tradeinitiationservice.getLastTradetransactionRefNo().subscribe({
      next :(response) =>{
      console.log(response);
      this.refereno=response;
      console.log ("mmmmmmm",this.refereno);
          //alert(this.refereno);
      this.tradecontract.patchValue({
        ttid: this.refereno
      });
       
      }
    });
     // console.log ("mmmmmmm",this.refereno);
    this.tradecontract.get('ttid')?.setValue(this.refereno);
    
    this.route.params.subscribe(params => {
    console.log("hhjhj"+params['tiid']);
     
        this.tradecontract.get('tino')?.setValue(params['tiid']);

        this.tradecontract.get('customer')?.setValue(params['customerName']);


        this.tradeinitiationservice.gettradeinitiationlineitems(params['tiid']).subscribe({
          next:(response: gettradeinitiationlineitems[])=>{
          response.forEach(item=>{

const rowdataitem={
sellingprice:item.sellingprice,
buyingprice:item.buyingprice,
name:item.name,
qty :item.qty,
productname:item.productname,
titblid :item.titblid,
productid :item.productid
}

this.rowData.push(rowdataitem);
this.gridApi.setRowData(this.rowData);

          })
          
          
          }
          
          
          })
















    });
  }

onSubmit(){
 
this.model.TransactionID=this.tradecontract.get('ttid')?.value;
//console.log("yyyy"+this.model.TransactionID);
this.model.TradeTransactionDate = this.tradecontract.get('ttdate')?.value;
//console.log(this.model.TradeTransactionDate);
this.model.transactionInitiationid = this.tradecontract.get('tino')?.value;
//console.log(this.model.transactionInitiationid);
this.model.tradeTransactionStageID = 1
//console.log(this.model.tradeTransactionStageID);
this.model.Remarks =this.tradecontract.get('remarks')?.value;
this.model.transactionReferencenumber= 'adsadas'
//console.log (this.model);
this.tradecontractservice.createTradeContract(this.model).subscribe({
next:(response)=>{
//console.log(response);
this.rowData.splice(0, this.rowData.length);
if (this.gridApi)
{
this.gridApi.forEachNode((node:{data:any})=>{
const rowDataItem ={
  productid:node.data.productid,
  titblid :node.data.titblid
}

this.rowData.push(rowDataItem);
console.log (this.rowData);
});
for (const rowDataItem of this.rowData) {
  this.model1.TTransanID =this.tradecontract.get('ttid')?.value;
  this.model1.TransactionInitiationDetailsid=rowDataItem.titblid;
  this.model1.ttProductid =rowDataItem.productid
  this.tradecontractservice.createTradeContractdetails(this.model1).subscribe({
    next:(detailresponse)=>{
    console.log ("detail inserted", detailresponse);
    },
    error :(error)=>{
      console.error("Error inserting detail:", error);
    }
    })
}





//this.router.navigate(['trading/listtradingcontract'])
}

}


});
  }
}
