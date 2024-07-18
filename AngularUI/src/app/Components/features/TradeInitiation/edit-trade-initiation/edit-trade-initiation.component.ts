import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TradeinitiationService } from '../services/tradeinitiation.service';
import { EditTradeInitiation } from '../Models/EditTradeInitiation.model';
import { Customer } from '../../customer/Models/customer.model';
import { CustomerService } from '../../customer/services/customer.service';
import { CustomerPaymentTerms } from '../../customerpaymentterms/Models/customerpaymentterms.model';
import { CustomerPaymentTermsService } from '../../customerpaymentterms/services/customer-payment-terms.service';
import { ColDef } from 'ag-grid-community';
import { Supplier } from '../../customer/Models/supplier.model';

@Component({
  selector: 'app-edit-trade-initiation',
  templateUrl: './edit-trade-initiation.component.html',
  styleUrls: ['./edit-trade-initiation.component.css']
})
export class EditTradeInitiationComponent implements OnInit {
  id?: number;
  myForm: FormGroup;
  customers: Customer[] = [];
  paymentmethods:CustomerPaymentTerms[]=[];
  edittradetransition?: EditTradeInitiation;
  filteredCustomers: Customer[] = [];
  customerSearchControl: FormControl = new FormControl();
  paymentSearchControl:FormControl=new FormControl();
  rowData: any[] = [];
  public columnDefs: ColDef[] = [];
  filterPaymentmethod :CustomerPaymentTerms[] = [];
  gridApi: any;
  gridOptions: any;
  filteredsupplier :Supplier[]=[];
  suppliers:Supplier[]=[];
  onGridReady(params: any): void {
    this.gridApi = params.api;
  }
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customerservice:CustomerService,
     private tradeinitiationservice: TradeinitiationService,
     private customerpaymentterms:CustomerPaymentTermsService
  ) {
    this.myForm = this.fb.group({
      crReferenceNumber: ['', Validators.required],
      tradeinitiationDate: ['', Validators.required],
      customer: ['', Validators.required],
      paymentmethod:['', Validators.required],
    });

    this.customerSearchControl.valueChanges.subscribe(value => {
      // Filter customers based on the search query
      this.filteredCustomers = this.filterCustomers(value);
    });

this.paymentSearchControl.valueChanges.subscribe(value=>{
this.filterPaymentmethod =this.filteredPaymentmethod(value);


});

  }

  filteredPaymentmethod(value:string ):CustomerPaymentTerms[]{
const filtervalue =value.toLowerCase();
return this.paymentmethods.filter(pm=>pm.cPaymentmethodName?.toLowerCase().includes(filtervalue))

  }


  filterCustomers(value: string): Customer[] {
    const filterValue = value.toLowerCase();
    return this.customers.filter(customer => customer.name.toLowerCase().includes(filterValue));
  }


  setColumnDefs(): void {
    this.columnDefs = [
      { headerName: 'Titblid', field: 'titblid' },
      { headerName: 'Product ID', field: 'productId' },
      { headerName: 'Product Name', field: 'productname' },
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






  ngOnInit(): void {
    this.setColumnDefs();
    this.customerpaymentterms.getAllCustomerPaymnetTerms().subscribe({
      next: (response) => {
        console.log(response);
        this.paymentmethods = response;
        this.filterPaymentmethod = response; // Initialize filteredCustomers with the full list
      }
    });
    this.customerservice.getallCustomers().subscribe({
      next: (response) => {
        this.customers = response;
        this.filteredCustomers = response; // Initialize filteredCustomers with the full list
      }
    });

    this.customerservice.getallsuppliers().subscribe({
      next:(response)=>{
        this.suppliers =response;
        this.filteredsupplier=response;
        this.setColumnDefs();
      console.log(this.filteredsupplier);
      
      }
      
      
      })













    this.route.params.subscribe(params => {
      // Extract the ID parameter value
      this.id = +params['tInitationID'];

      if (this.id) {
        this.tradeinitiationservice.getTradeInitiationById(this.id).subscribe({
          next: (response) => {
            // Log the full API response
            console.log('Full API response:', response);

            // Assuming response is an array, get the first element
            if (Array.isArray(response) && response.length > 0) {
              this.edittradetransition = response[0];
              console.log('edittradetransition:', this.edittradetransition);
              console.log('tInitationDate:', this.edittradetransition?.tInitationDate);
         

              // Patch the form value inside the HTTP request's success callback
              this.myForm.patchValue({
                tradeinitiationDate: this.edittradetransition?.tInitationDate,
                crReferenceNumber: this.edittradetransition?.customerRequirementid,
                customer:this.edittradetransition?.tcustomerid,
paymentmethod:this.edittradetransition?.customerPaymentMethodid

                
              });
            } else {
              console.error('Unexpected response format or empty array');
            }
            if (this.id) {

            this.tradeinitiationservice.getTradeInitiationdetailsById(this.id).subscribe({

              next: (response) => {
console.log (response);
                response.forEach(item => {
                  const rowDataItem = {
                    titblid: item.titblid,
                    productId:item.productid,
                    productname:item.productname,
                    crtblid:item.crtblid,
                    sellingprice:item.sellingprice,
                    buyingprice:item.buyingprice,
                    qty:item.qty,
                    supplierid: this.filteredsupplier.find(s => s.sId === item.supplierid)?.name 
                   
                    // map other properties as needed
                  };
                  this.rowData.push(rowDataItem);
                  this.gridApi.setRowData(this.rowData);
                });




                
              }


            })


          }


















          },
          error: (err) => {
            console.error('Error fetching trade initiation data', err);
          }
        });
      }
    });
  }
}