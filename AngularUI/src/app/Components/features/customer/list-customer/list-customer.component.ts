import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../Models/customer.model';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer ?:Customer[];
  constructor(private customerservice: CustomerService)
  {
  
  
  }
  ngOnInit(): void {

    this.customerservice.getallCustomers().subscribe({
      next :(response) =>{
        console.log(response);
      this.customer=response;
      }
      });
  }



}

