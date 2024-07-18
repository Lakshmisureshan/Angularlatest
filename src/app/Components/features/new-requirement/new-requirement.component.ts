import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer/services/customer.service';
import { NewrequirementService } from './services/newrequirement.service';
import { Customer } from '../customer/Models/customer.model';
import { Division } from '../division/Models/division.model';
import { DivisionService } from '../division/services/division.service';
import { Product } from '../Product/Models/product.model';
import { ProductService } from '../Product/Services/product.service';
import { AddCustomerRequirement } from './Model/add-customerrequirement.model';
import { AddCustomerRequirementDetail } from './Model/add-customerrequirementdetail.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.css']
})
export class NewRequirementComponent implements OnInit {
  refereno :number|undefined;
  gridApi:any;
  model: AddCustomerRequirement;
  customers :Customer[] =[];
  filtercustomers :Customer[]=[];
  userForm: FormGroup;
  customerSearchControl: FormControl = new FormControl();
  divisionSearchControl :FormControl=new FormControl();
  productSearchControl :FormControl =new FormControl();
  divisions :Division[]=[];
  filterdivisions:Division[]=[];
  filterproducts:Product[]=[];
  products :Product[]=[];
  submitted = false;
  model1: AddCustomerRequirementDetail;
  columnDefs = [
    { headerName: 'Product ID', field: 'productId'},
    { headerName: 'Product Name', field: 'name',  sortable: true, filter: true }
    // Add more columns as needed
  ];

  onGridReady(params: any): void {
    this.gridApi = params.api;
  }

  rowData: any[] = [];
  onFormSubmit()
{
  this.model.cRreferenceNo  = this.userForm.value.referenceno;
  if (this.userForm.valid && !this.submitted) {
    this.submitted = true; 
    const iii=  this.userForm.get('customer')?.value;
alert(iii);
alert(this.model.cRreferenceNo);


this.model.divisionid=this.userForm.get('division')?.value;
this.model.Date = this.userForm.get('date')?.value;
this.model.approvedrejectedstatus = 1;
this.model.customerRequirementStatusid =1
this.model.doctype="CR";
this.model.customerid=this.userForm.get('customer')?.value;
alert(this.model.divisionid);

alert(this.model.Date);


this.newrequirementservice.createcustomerrequirementheader(this.model)
.subscribe({
next: (response) => {
alert(JSON.stringify(response));
 var crid=response.cRreferenceNo;
 alert(response.cRreferenceNo);
 for (const rowDataItem of this.rowData) {
  this.model1.productid =rowDataItem.productId;
  this.model1.crid = crid; 

  this.newrequirementservice.createcustomerrequirementDetail(this.model1)
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



this.router.navigateByUrl('admin/getNewcustomerrequirement');




















  }


});














  }

}
  constructor(private fb:FormBuilder, private customerservice:CustomerService,  private newrequirementservice :NewrequirementService, private divisionservice:DivisionService, private productService:ProductService, private router:Router)
  {
    this.model1 ={
      crid:"",
      productid :0
        
      }

  this.userForm = this.fb.group({
  referenceno:this.refereno,
  date:['',Validators.required],
  customer: ['', Validators.required],
  division:['', Validators.required],

  product:[''],


  
    });

    this.model = {
      cRreferenceNo: "",
      customerid: 0,
      divisionid: 0,
      approvedrejectedstatus:1,
      Date: new Date(),
      customerRequirementStatusid:1,
      doctype:"CR"
    };
  this.customerSearchControl.valueChanges.subscribe(value=>{
  this.filtercustomers = this.filterCustomers(value);
  });

this.divisionSearchControl.valueChanges.subscribe(value=>{
  this.filterdivisions = this.filterdivisionfun(value);

});


this.productSearchControl.valueChanges.subscribe((value)=>{

this.filterproducts =this.filterProductFun(value);

})










  }



  filterCustomers(value: string): Customer[] 
  {
   const filtervalue =value.toLowerCase();
return this.customers.filter(customer=>customer.name.toLowerCase().includes(filtervalue))
  }

  filterdivisionfun(value: string): Division[] 
  {
   const filtervalue =value.toLowerCase();
return this.divisions.filter(division=>division.divisionname.toLowerCase().includes(filtervalue))
}
filterProductFun(value:string):Product[]
{

const filtervalue =value.toLowerCase();
return this.products.filter(product=>product.name.toLowerCase().includes(filtervalue))

}


addDataToGrid(event: Event): void {
   
  const selectedProductId = this.userForm.get('product')?.value;
  const selectedProduct = this.products.find(product => product.productId === selectedProductId);
  if (selectedProduct) {
    const rowDataItem = {
      productId: selectedProduct.productId,
      name: selectedProduct.name,
    };
    this.rowData.push(rowDataItem);
    this.gridApi.setRowData(this.rowData);
}

}

ngOnInit(): void {
this.newrequirementservice.getmaxCustomerrequirementrefno().subscribe({
next: (response) => {
this.refereno =response;
this.userForm.patchValue({
  referenceno: this.refereno
});




 }





})
this.customerservice.getallCustomers().subscribe({
  next: (response) => {
  this.customers =response;
  this.filtercustomers =response;
  }
  })
  this.divisionservice.gteAllDivisions().subscribe({
    next: (response) => {
    this.divisions =response;
    this.filterdivisions =response;

    console.log("Divisions:", response);
    }
    })



    this.productService.getAllProducts(). subscribe({
      next: (response) => {
      this.products =response;
      this.filterproducts =response;
      console.log("Products:", response);
      }
      })
  





}

}