import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-frieght-charge-update',
  templateUrl: './frieght-charge-update.component.html',
  styleUrls: ['./frieght-charge-update.component.css']
})
export class FrieghtChargeUpdateComponent {

  FrieghtForm:FormGroup;
  supplierSearchControl: FormControl = new FormControl();
  constructor(private fb:FormBuilder)
  {
  this.FrieghtForm =this.fb.group({
  supplier: ['', ],

})


  }
}
