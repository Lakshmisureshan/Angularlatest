import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CustomerService } from '../../customer/services/customer.service';
import { Customer } from '../../customer/Models/customer.model';
import 'ag-grid-enterprise';
import { TradeinitiationService } from '../../TradeInitiation/services/tradeinitiation.service';
import { getCustomerrequirementlineitems } from '../../TradeInitiation/Models/getCustomerrequirementlineitems.model';
import { Supplier } from '../../customer/Models/supplier.model';
import { FormControl } from '@angular/forms';
import { CustomerPaymentTerms } from '../../customerpaymentterms/Models/customerpaymentterms.model';
import { CustomerPaymentTermsService } from '../../customerpaymentterms/services/customer-payment-terms.service';
import { AddTradeInitiation } from '../../TradeInitiation/Models/AddTradeTransaction.model';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.css']
})
export class TestdataComponent implements OnInit {
  gridApi: any;
  id?: number;
  model:AddTradeInitiation;
  customerSearchControl: FormControl = new FormControl();
  filteredCustomers: Customer[] = []; 
  public listOfCountries: Supplier[] = [];
  customers: Customer[] = [];
  customerpaymnetterms: CustomerPaymentTerms[] = [];
  customerpaymenttermsSearchControl: FormControl = new FormControl();
// Initialize filteredCustomers properly filteredCustomers: Customer[] = []; // Initialize filteredCustomers properly
  filteredCustomerpaymentterms: CustomerPaymentTerms[] = [];
  public columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    width: 200,
  };

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.rowData = [...this.rowData];
  }

  public rowData: any[] = [];

  public themeClass: string = "ag-theme-quartz";
  gridOptions: any = {
    singleClickEdit: true,
    suppressClickEdit: false,
  };

  onSubmit(): void {
    const displayedValues: any[] = [];
    this.gridApi.forEachNode((node: any) => {
      const displayedValue = {
        productId: node.data.productId,
        name: node.data.name,
        sellingprice: node.data.sellingprice,
        buyingprice:node.data.buyingprice,
        supplierName: node.data.supplierid ? this.listOfCountries.find(c => c.sId === node.data.supplierid)?.sId : ''
      };
      displayedValues.push(displayedValue);
    });
    console.log('Displayed Values:', displayedValues);
  }

  constructor(private customerService: CustomerService, private tradeinitiationservice: TradeinitiationService, private customerpaymentservice:CustomerPaymentTermsService) {


    this.model={
      tInitationid :"",
        customerRequirementid:"",
        tcustomerid :0,
        CustomerPaymentMethodid:0,
        transactionInitationStatusid :1,
        TInitationDate: '',
    
    }
      







    
  }

  ngOnInit(): void {
    this.customerService.getallCustomers().subscribe({
      next: (response) => {
        this.customers = response;
        this.filteredCustomers = response; // Initialize filteredCustomers with the full list
      }
    });
    this.customerpaymentservice.getAllCustomerPaymnetTerms().subscribe({
      next: (response) => {
        console.log(response);
        this.customerpaymnetterms = response;
        this.filteredCustomerpaymentterms = response; // Initialize filteredCustomers with the full list
      }
    });








    this.tradeinitiationservice.getcustomerrequirementlineitemdetails('1').subscribe({
      next: (response: getCustomerrequirementlineitems[]) => {
        response.forEach(item => {
          const rowDataItem = {
            productId: item.productid,
            name: item.productname,
            supplierid: 0
          };
          this.rowData.push(rowDataItem);
        });
        if (this.gridApi) {
          this.gridApi.setRowData(this.rowData);
        }
      },
      error: (err) => {
        console.error('Error fetching customer requirement line items', err);
      }
    });

    this.customerService.getallsuppliers().subscribe({
      next: (response) => {
        this.listOfCountries = response;
        this.setColumnDefs();
      },
      error: (err) => {
        console.error('Error fetching suppliers', err);
      }
    });
  }

  setColumnDefs(): void {
    this.columnDefs = [
      { headerName: 'Product ID', field: 'productId' },
      { headerName: 'Product Name', field: 'name' },
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














      {
        headerName: 'Supplier',
        field: 'supplierid',
        editable: true,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
          values: this.listOfCountries.map(s => s.sId),
          allowTyping: true,
          filterList: true,
          highlightMatch: true,
          valueListMaxHeight: 220
        },
        valueSetter: (params) => {
          const selectedSupplier = this.listOfCountries.find(refData => refData.sId === params.newValue);
          if (selectedSupplier) {
            params.data.supplierid = selectedSupplier.sId;
            return true;
          } else {
            return false;
          }
        },
        valueGetter: (params) => {
          return this.listOfCountries.find(refData => refData.sId === params.data.supplierid)?.sId;
        },
        cellStyle: {
          border: '1px dotted green',
         
       
        }
      },
    ];
  }

  onEdit(data: any) {
    console.log('Edit user:', data);
  }

  onDelete(data: any) {
    console.log('Delete user:', data);
  }
}