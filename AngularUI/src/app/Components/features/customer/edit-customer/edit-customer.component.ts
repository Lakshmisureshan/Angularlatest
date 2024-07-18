import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../Models/customer.model';
import { UpdateCustomer } from '../Models/updatecustomer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements  OnInit , OnDestroy{
id :string |null =null;
paramassubstription ?:Subscription;
updatecustomersubscription ?: Subscription;
customer ?:Customer;
userForm!: FormGroup;
submitted = false;
  constructor(private route: ActivatedRoute, private customerservice:CustomerService, private router:Router,  private fb: FormBuilder)
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
this.paramassubstription =this.route.paramMap.subscribe({
next :(paramas) => {
this.id = paramas.get('id');
if(this.id){
this.customerservice.getCategoryById(this.id).subscribe({
next :(response)=>{
this.customer=response;


this.userForm.patchValue({
  name: this.customer.name,
  country: this.customer.country,
  emailID: this.customer.emailID,
  address: this.customer.address,
  phoneNo: this.customer.phoneNo
});















}

});
}






}

})
}
ngOnDestroy(): void {
this.paramassubstription?.unsubscribe();
this.updatecustomersubscription?.unsubscribe();
}
onFormSubmit(): void {
  this.submitted = true;

  if (this.userForm.valid) {

if (this.customer && this.id)
{

var updatecustomer :UpdateCustomer={
  name: this.userForm.value.name,
  address: this.userForm.value.address,
  country: this.userForm.value.country,
  emailID: this.userForm.value.emailID,
  phoneNo: this.userForm.value.phoneNo
};
console.log(updatecustomer);
this.updatecustomersubscription=this.customerservice.updatecustomer(this.id, updatecustomer).subscribe({
next : (response)=>{
this.router.navigateByUrl('/admin/categories');
}
});
}

  }



}


}
