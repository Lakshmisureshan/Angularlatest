import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';
import { CustomerService } from '../../customer/services/customer.service';
import { Supplier } from '../../customer/Models/supplier.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-suppliercelleditorcomponent',
  templateUrl: './suppliercelleditorcomponent.component.html',
  styleUrls: ['./suppliercelleditorcomponent.component.css']
})
export class SuppliercelleditorcomponentComponent implements ICellEditorAngularComp, OnInit  {
  
  params!: ICellEditorParams;
  selectedSupplier!: string;
  supplierSearchControl :FormControl=new FormControl();



  filteredsupplier:Supplier[]=[];
  tradeForm1: FormGroup;

  suppliers :Supplier[]=[];
  @Output() supplierSelected = new EventEmitter<any>();
  onDropdownClick(){

alert("zsdnsdbfds");

  }
 
  constructor(private customerService: CustomerService, private fb: FormBuilder) {
    this.tradeForm1 = this.fb.group({
   
      supplier:['']
      });


      this.supplierSearchControl.valueChanges.subscribe(value => {
        // Filter customers based on the search query
        this.filteredsupplier = this.fsupplier(value);
      });





  }

  fsupplier(value:string){
    const filtervalue =value.toLowerCase();
    return this.suppliers.filter(supp=>supp.name?.toLowerCase().includes(filtervalue));
    
    
      }


  agInit(params: ICellEditorParams<any, any, any>): void {
  this.params=params;
  this.selectedSupplier = this.params.value;

  }
  getValue() {
    return this.selectedSupplier;
  }
  refresh?(params: ICellEditorParams<any, any, any>): void {
    throw new Error('Method not implemented.');
  }
  afterGuiAttached?(): void {

  }
  isPopup?(): boolean {
    return false;
  }
  getPopupPosition?(): 'over' | 'under' | undefined {
    throw new Error('Method not implemented.');
  }
  isCancelBeforeStart?(): boolean {
    return false;
  }
  isCancelAfterEnd?(): boolean {
    return false;
  }
  focusIn?(): void {
    throw new Error('Method not implemented.');
  }
  focusOut?(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
   
    this.customerService.getallsuppliers().subscribe({
      next: (response) => {
        console.log(response);
        this.suppliers = response;
        this.filteredsupplier = response; // Initialize filteredCustomers with the full list
      }
    });
  }
  onSupplierSelected(event: any): void {
  this.selectedSupplier = event.value;
  alert(this.selectedSupplier);
  const rowIndex = this.params.rowIndex;

  alert(rowIndex);

  this.supplierSelected.emit({ value: this.selectedSupplier, rowIndex });
  //this.params.stopEditing(); 
}
}