import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddSupplier } from '../Model/addsupplier.model';
import { SupplierService } from '../Services/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  userForm: FormGroup;
  model: AddSupplier;
  submitted = false;
  isFormEmpty(): boolean {
    return Object.values(this.userForm.value).some(value => !value);
  }


  isFormTouched(): boolean {
    return Object.keys(this.userForm.controls).some(controlName => this.userForm.get(controlName)?.touched);
  }




  constructor(private supplierservice:SupplierService ,private router: Router,

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
    this.supplierservice.createsupplier(this.model)
    .subscribe({
      next: () => {
        this.router.navigateByUrl('admin/supplier');
      }
    });
  }
  }















}
