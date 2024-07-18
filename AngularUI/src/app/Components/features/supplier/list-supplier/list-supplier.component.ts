import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../Services/supplier.service';
import { Supplier } from '../Model/supplier.model';
@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {
  supplier ?:Supplier[];
  filteredSupplier?: Supplier[] = [];
  searchTerm: string = '';
  constructor(private supplierservice: SupplierService){
  }
  ngOnInit(): void {
this.supplierservice.getAllsuppliers().subscribe({
next : (response) =>{
 // alert(JSON.stringify(response));
  this.supplier=response;
  this.applyFilter();
}

})

}

applyFilter(): void {
  this.filteredSupplier = this.supplier?.filter((item) =>
  item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
item.address.toLowerCase().includes(this.searchTerm.toLowerCase()) ||

item.phoneNo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
item.country.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
item.emailID.toLowerCase().includes(this.searchTerm.toLowerCase()) 
  );

}


onSearchChange(): void {
  this.applyFilter();
}

}
