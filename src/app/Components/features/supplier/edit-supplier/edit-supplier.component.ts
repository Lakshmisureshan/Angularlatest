import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SupplierService } from '../Services/supplier.service';
import { Supplier } from '../Model/supplier.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateSupplier } from '../Model/updatesupplier.model';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent  implements OnInit {
  id :string |null =null;
  paramassubstription ?:Subscription;
  updatesuppliersubscription ?: Subscription;
  supplier ?:Supplier;
  userForm!: FormGroup;
  submitted = false;
constructor(private route: ActivatedRoute,private supplierservice:SupplierService,private fb: FormBuilder,private router:Router )
{
  this.userForm = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    // other form controls
   
    emailID: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    address :['', Validators.required],

    phoneNo :['', Validators.required]
    // other form controls
  });



}

ngOnInit(): void {
 this. paramassubstription =this.route.paramMap.subscribe({
next :(params) =>{
 this.id = params.get('id');
if(this.id){
this.supplierservice.getSupplierById(this.id).subscribe({
next :(response) =>{
  this.supplier=response;

  this.userForm.patchValue({
    name: this.supplier.name,
    country: this.supplier.country,
    emailID: this.supplier.emailID,
    address: this.supplier.address,
    phoneNo: this.supplier.phoneNo
  });
 
}

})
}
}
})
}
onFormSubmit(): void {
  this.submitted = true;

  if (this.userForm.valid) {

if (this.supplier && this.id)
{

var updatesupplier :UpdateSupplier={
  name: this.userForm.value.name,
  address: this.userForm.value.address,
  country: this.userForm.value.country,
  emailID: this.userForm.value.emailID,
  phoneNo: this.userForm.value.phoneNo
};
console.log(updatesupplier);
this.updatesuppliersubscription=this.supplierservice.updatesupplier(this.id, updatesupplier).subscribe({
next : (response)=>{
this.router.navigateByUrl('/admin/supplier');
}
});
}

  }



}
}
