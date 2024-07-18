import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../customer/Models/customer.model';
import { CustomerService } from '../../customer/services/customer.service';
import { CustomerPaymentTermsService } from '../../customerpaymentterms/services/customer-payment-terms.service';
import { CustomerPaymentTerms } from '../../customerpaymentterms/Models/customerpaymentterms.model';
import { ProductService } from '../../Product/Services/product.service';
import { Product } from '../../Product/Models/product.model';
import { ActivatedRoute } from '@angular/router';
import { TradeinitiationService } from '../services/tradeinitiation.service';
import { AddTradeInitiation } from '../Models/AddTradeTransaction.model';
import { Supplier } from '../../customer/Models/supplier.model';
import { getCustomerrequirementlineitems } from '../Models/getCustomerrequirementlineitems.model';
import { SuppliercelleditorcomponentComponent } from '../../suppliercelleditor/suppliercelleditorcomponent/suppliercelleditorcomponent.component';
import { CellEditorComponent } from 'ag-grid-community/dist/types/core/components/framework/componentTypes';
import { ColDef } from 'ag-grid-community';

import 'ag-grid-enterprise';
import { AddTradeInitiationDetails } from '../Models/AddTradeInitationdetail.model';
@Component({
  selector: 'app-create-trade-initiation',
  templateUrl: './create-trade-initiation.component.html',
  styleUrls: ['./create-trade-initiation.component.css']
})
export class CreateTradeInitiationComponent implements OnInit {
  id?: number;
  gridOptions: any;
  customername?: string |undefined;
  customerid ?:string;
  tradeForm: FormGroup;
  customers: Customer[] = [];
  customerpaymnetterms: CustomerPaymentTerms[] = [];
   products:Product[]=[];
   refereno ?:number|undefined;
   rowData: any[] = [];
  customerSearchControl: FormControl = new FormControl();
  customerpaymenttermsSearchControl: FormControl = new FormControl();
  filteredCustomers: Customer[] = []; // Initialize filteredCustomers properly filteredCustomers: Customer[] = []; // Initialize filteredCustomers properly
  filteredCustomerpaymentterms: CustomerPaymentTerms[] = [];
  gridApi: any;
  productSearchcontrol :FormControl =new FormControl();
  filteredProducts :Product[]=[];
  userForm: any;
  suppliers:Supplier[]=[];
  filteredsupplier :Supplier[]=[];
cuastomerrequorementlineitems :getCustomerrequirementlineitems[]=[];
supplierSearchControl :FormControl=new FormControl();
errorMessage: string | null = null;
public columnDefs: ColDef[] = [];
model:AddTradeInitiation;
model1:AddTradeInitiationDetails;
 cellClassRules = {
  "cell-pass": (params: { value: number; }) => params.value >= 60,
  "cell-fail": (params: { value: number; }) => params.value < 60
};

  defaultQtyValueGetter(params: any): any {
    // Example of setting a default value
    return params.data.qty ? params.data.qty : 0;
  }
  onGridReady(params: any): void {
    this.gridApi = params.api;
  }


 

  setColumnDefs(): void {
    this.columnDefs = [
      { headerName: 'Product ID', field: 'productId' },
      { headerName: 'Product Name', field: 'name' },
      { headerName: 'Crtblid', field: 'crtblid' },


      { headerName: 'Selling Price', field: 'sellingprice', editable: true,


        cellStyle: {
          padding: '4px', // Adjust padding as per your requirement
          boxShadow: 'inset 0 0 0 1px gray', // Inset shadow to create inner border
          backgroundColor: '#ffffff' 
       
        }
       },
       { headerName: 'Buying Price', field: 'buyingprice', editable: true,


        cellStyle: {
          padding: '4px', // Adjust padding as per your requirement
          boxShadow: 'inset 0 0 0 1px gray', // Inset shadow to create inner border
          backgroundColor: '#ffffff' 
       
        }
       },



       { headerName: 'Qty', field: 'qty', editable: true,
        cellStyle: {
          padding: '4px', // Adjust padding as per your requirement
          boxShadow: 'inset 0 0 0 1px gray', // Inset shadow to create inner border
          backgroundColor: '#ffffff' 
       
        }
       },

      {
        headerName: 'Supplier',
        field: 'supplierid',
        editable: true,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
          values: this.filteredsupplier.map(s => s.name),
          allowTyping: true,
          filterList: true,
          highlightMatch: true,
          valueListMaxHeight: 220
        },
        valueSetter: (params) => {
          const selectedSupplier = this.filteredsupplier.find(refData => refData.name === params.newValue);
          const selectedsuppliername = this.filteredsupplier.find(refData => refData.name === params.newValue)?.name;
          if (selectedSupplier) {
            params.data.supplierid = selectedSupplier.name;
            return true;
          } else {
            return false;
          }
        },
        valueGetter: (params) => {
          return this.filteredsupplier.find(refData => refData.name === params.data.supplierid)?.name;
        },
        cellStyle: {
          border: '1px dotted green',
               
        }
      },
    ];
  }






constructor(private fb: FormBuilder, private customerService: CustomerService, private customerpaymentservice:CustomerPaymentTermsService, private productservice:ProductService,private route: ActivatedRoute, private tradeinitiationservice:TradeinitiationService) {
this.model={
  tInitationid :"",
    customerRequirementid:"",
    tcustomerid :0,
    CustomerPaymentMethodid:0,
    transactionInitationStatusid :1,
    TInitationDate: '',

}

this.model1={
  tiid :'',
  crtblid :'',
  productid :0,
  supplierid:0,
  buyingprice:0,
  sellingprice:0,
  qty:0
  
}

















    this.tradeForm = this.fb.group({
      tradeInitiationNumber:this.refereno,
      date: ['', Validators.required],
      customer: ['', Validators.required],
      crReferenceNumber: ['', Validators.required],
      customerpaymentterms: ['', Validators.required],
      product :[''],
      sellingprice :[''],
      buyingprice :[''],
      qty :[''],
      supplier:['']
      });

    this.customerSearchControl.valueChanges.subscribe(value => {
      // Filter customers based on the search query
      this.filteredCustomers = this.filterCustomers(value);
    });
    this.customerpaymenttermsSearchControl.valueChanges.subscribe(value => {
      // Filter customers based on the search query
      this.filteredCustomerpaymentterms = this.filterCustomerpaymentterms(value);
    });

this.supplierSearchControl.valueChanges.subscribe(value=>{

this.filteredsupplier =this.fsupplier(value);

})





this.productSearchcontrol.valueChanges.subscribe(value=>{
this.filteredProducts = this.filterProducts(value);

});

}

  ngOnInit(): void {
  
    this.gridOptions = {
      components: {
        linkRenderer: SuppliercelleditorcomponentComponent,
     
      },

      singleClickEdit: true,
      suppressClickEdit: false,







      




      // Other grid options
    };
    this.route.params.subscribe(params => {
      // Extract the ID parameter value
      this.id = +params['crid'];
      this.customername =params['customerName'];
      this.tradeinitiationservice.getcustomeridfromcustomername(params['customerName']).subscribe({
        next :(response) =>{
        console.log("cuatsdhbf bf"+response);
        this.customerid =response;
        console.log("nnnnnnnnnnnnnnnnnn bf"+this.customerid);
        this.tradeForm.get('customer')?.setValue(this.customerid);
    


        }
      });

      this.tradeinitiationservice.getcustomerrequirementlineitemdetails(params['crid']).subscribe({
        next: (response: getCustomerrequirementlineitems[]) => {

          console.log(response);
          response.forEach(item => {
            const rowDataItem = {
              productId: item.productid,
              name: item.productname,
              crtblid :item.crtblid
              // map other properties as needed
            };
            this.rowData.push(rowDataItem);
            this.gridApi.setRowData(this.rowData);
          });
      
          // If you need to see the results
          console.log(this.rowData);
        },
        error: (err) => {
          console.error('Error fetching customer requirement line items', err);
        }
      });







  //alert(this.id);
});
this.tradeinitiationservice.getLastTradeInitiationRefNo().subscribe({
  next :(response) =>{
  console.log(response);
  this.refereno=response;

  //alert(this.refereno);
  this.tradeForm.patchValue({
  tradeInitiationNumber: this.refereno
  });













  }
});
    this.customerService.getallCustomers().subscribe({
      next: (response) => {
        this.customers = response;
        this.filteredCustomers = response; // Initialize filteredCustomers with the full list
      }
    });


this.customerService.getallsuppliers().subscribe({
next:(response)=>{

  this.suppliers =response;
  this.filteredsupplier=response;
  this.setColumnDefs();
console.log(this.filteredsupplier);

}


})








    this.customerpaymentservice.getAllCustomerPaymnetTerms().subscribe({
      next: (response) => {
        console.log(response);
        this.customerpaymnetterms = response;
        this.filteredCustomerpaymentterms = response; // Initialize filteredCustomers with the full list
      }
    });

    this.productservice.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.filteredProducts = response; // Initialize filteredCustomers with the full list
      }
    });
  }
  filterCustomerpaymentterms(value: string): CustomerPaymentTerms[] {
    const filterValue = value.toLowerCase();
    return this.customerpaymnetterms.filter(customerpaymnetterms => customerpaymnetterms.cPaymentmethodName?.toLowerCase().includes(filterValue));
  }

filterProducts(value:string): Product[]{
const filtervalue =value.toLowerCase();
return this.products.filter(products=>products.name?.toLowerCase().includes(filtervalue));
}

  filterCustomers(value: string): Customer[] {
    const filterValue = value.toLowerCase();
    return this.customers.filter(customer => customer.name.toLowerCase().includes(filterValue));
  }

  fsupplier(value:string):Supplier[]{
const filtervalue =value.toLowerCase();
return this.suppliers.filter(supp=>supp.name?.toLowerCase().includes(filtervalue));


  }

  addDataToGrid(event:Event):void{


  }




 



  onSupplierSelected(event: { value: string, rowIndex: number }) {
    console.log('Selected Supplier:', event.value);
alert(event.value);

    // Update rowData with the selected supplier value at the specified rowIndex
    this.rowData[event.rowIndex].supplierid = event.value;

    // Optionally, you can update the grid with the new rowData
    if (this.gridApi) {
      this.gridApi.setRowData(this.rowData);
    }
  }

  onSubmit() {
  //alert("dsfmsdfsd");
  //this.model.tInitationid =this.userForm.value.tradeInitiationNumber;
  alert(this.id );
  alert(this.tradeForm.get('supplier')?.value)
  this.model.customerRequirementid = (this.id ?? '').toString();
  this.model.TInitationDate =this.tradeForm.get('date')?.value;
  this.model.tcustomerid=this.tradeForm.get('customer')?.value;
  this.model.CustomerPaymentMethodid =this.tradeForm.get('customerpaymentterms')?.value;
  this.model.transactionInitationStatusid =1
  this.model.tInitationid = this.tradeForm.get('tradeInitiationNumber')?.value;              
  this.tradeinitiationservice.createTradeInitationheader(this.model)
  .subscribe({
  next: (response) => {
      if (this.gridApi) {
      // Get all row nodes from the grid
          this.gridApi.forEachNode((node: { data: any; }) => {
        const rowDataItem = {
          productId: node.data.productId,
          name: node.data.name,
          sellingprice: node.data.sellingprice,
          buyingprice: node.data.buyingprice,
          qty: node.data.qty,
          crtblid :node.data.crtblid,
          supplierid: this.filteredsupplier.find(refData => refData.name === node.data.supplierid)?.sId // Ensure this matches with your grid column definition
        };

        
        console.log (rowDataItem);
        this.rowData.push(rowDataItem);
      });
      for (const rowDataItem of this.rowData) {
        this.model1.productid =rowDataItem.productId;
        this.model1.tiid =this.tradeForm.get('tradeInitiationNumber')?.value;
        this.model1.buyingprice =rowDataItem.buyingprice;
        this.model1.sellingprice =rowDataItem.sellingprice;
        this.model1.qty =rowDataItem.qty;
        this.model1.supplierid=rowDataItem.supplierid;
        this.model1.crtblid=rowDataItem.crtblid
      

      // Set rowData in your component for further processing
      //this.rowData = this.rowData;

      this.tradeinitiationservice.createtradeinitiationdetails(this.model1)
      .subscribe({
        next: (detailResponse) => {
          // Handle detail insertion response if needed
          console.log("Detail inserted:", detailResponse);
        },
        error: (error) => {
          // Handle error if detail insertion fails
          console.error("Error inserting detail:", error);
        }
      });
    
    }

    }









 





  } , error: (error: { status: number; error: string | null; }) => {
    if (error.status === 409) { // Check if HTTP status code is 409 Conflict
      this.errorMessage = error.error; // Set error message received from the backend
    } else {
      this.errorMessage = 'An error occurred. Please try again later.'; // Generic error message
    }
  }








});

 
  }
}
