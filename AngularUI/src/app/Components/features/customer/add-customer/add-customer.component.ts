import { Component } from '@angular/core';
import { Customer } from '../Models/customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { AddCustomer } from '../Models/addcustomer.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  userForm: FormGroup;
  model: AddCustomer;
  submitted = false;
  isFormEmpty(): boolean {
    return Object.values(this.userForm.value).some(value => !value);
  }


  isFormTouched(): boolean {
    return Object.keys(this.userForm.controls).some(controlName => this.userForm.get(controlName)?.touched);
  }




  constructor(private customerservice:CustomerService ,private router: Router,

    private fb: FormBuilder

  ){

   




   this.userForm = this.fb.group({
      name: ['', Validators.required],

      country: ['', Validators.required],
      // other form controls
      
      emailID: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      address :['', Validators.required],

      phoneNo :['', Validators.required]
      // other form controls
    });





    this.model = {
  
      name:'',
      address:'',
      country :'',
      phoneNo :'',
      emailID:''
    }

  }
















  onFormSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
    console.log(this.model);
    this.model.name = this.userForm.value.name;
    this.model.country = this.userForm.value.country;
    this.model.address = this.userForm.value.address;
    this.model.phoneNo = this.userForm.value.phoneNo;
    this.model.emailID = this.userForm.value.emailID;
    this.customerservice.createcustomer(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/categories');
      }
    });
  }
  }




}
